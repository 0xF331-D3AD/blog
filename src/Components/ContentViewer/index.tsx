import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {buildFileUrlFromPathname} from "../../Utils/MarkdownUtils";
import {getDocument} from "../../Service/ArticlesService";
import {ErrorModal} from "../ErrorModal";
import {ProgressOverlay} from "../ProgressOverlay";
import {AppContentBaseRoutes, AppRoutes} from "../../Enums/AppRoutes";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import {MarkdownWrapper} from "./index.styles";
import {CTFIndexViewer} from "./CTFIndexViewer";

type Props = {
    baseUrl: string,
}

const MarkdownViewer = ({
                           baseUrl,
                       }: Props) => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');

    const location = useLocation();
    const navigate = useNavigate();

    const fetchContent = async () => {
        // Add .md to pathname to get an error
        const contentUrl = buildFileUrlFromPathname(location.pathname);
        setLoading(true);
        try {
            const document = await getDocument(contentUrl);
            setContent(document);
        } catch (e) {
            // @ts-ignore
            if (e.name === 'AxiosError' && e.code === "ERR_BAD_REQUEST") {
                const indexUrl = buildFileUrlFromPathname(baseUrl);
                try {
                    const indexDocument = await getDocument(indexUrl);
                    setContent(indexDocument);
                    navigate(baseUrl);
                } catch (innerError) {
                    navigate(AppRoutes.Landing);
                    // @ts-ignore
                    setError(`Initial error: ${e.message};\nError while redirecting: ${innerError.message}`);
                }
            } else {
                // @ts-ignore
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        fetchContent();
    }, [location]);

    return (
        <MarkdownWrapper>
            {

                [
                    AppContentBaseRoutes.CTF_THM,
                    AppContentBaseRoutes.CTF_OTW,
                    AppContentBaseRoutes.CTF_HTB,
                    AppContentBaseRoutes.CTF_VULNHUB
                ].includes(location.pathname)
                    ? (
                        <CTFIndexViewer content={content} />
                    )
                    :
                    (
                    <ReactMarkdown remarkPlugins={[gfm]}>
                        {content}
                    </ReactMarkdown>
                    )
            }
            {
                error && (
                    <ErrorModal
                        close={() => setError('')}
                        message={error}
                    />
                )
            }
            {loading && !error && (
                <ProgressOverlay/>
            )}
        </MarkdownWrapper>
    )
}

export const LandingViewer = () => (<MarkdownViewer baseUrl={AppRoutes.Landing}/>);
export const ArticlesViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.Article}/>);
export const CtfViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.CTF}/>);
export const TryHackMeViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.CTF_THM}/>);
export const HackTheBoxViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.CTF_HTB}/>);
export const OverTheWireViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.CTF_OTW}/>);
export const VulnhubViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.CTF_VULNHUB}/>);
export const TutorialViewer = () => (<MarkdownViewer baseUrl={AppContentBaseRoutes.Tutorial}/>);
