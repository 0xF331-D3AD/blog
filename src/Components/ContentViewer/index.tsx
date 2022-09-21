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

type Props = {
    baseUrl: string,
}

const ContentViewer = ({
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
            const markdown = await getDocument(contentUrl);
            setContent(markdown);
        } catch (e) {
            // @ts-ignore
            if (e.name === 'AxiosError' && e.code === "ERR_BAD_REQUEST") {
                const indexUrl = buildFileUrlFromPathname(baseUrl);
                try {
                    const indexMarkdown = await getDocument(indexUrl);
                    setContent(indexMarkdown);
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
            <ReactMarkdown remarkPlugins={[gfm]}>
                {content}
            </ReactMarkdown>
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

export const LandingViewer = () => (<ContentViewer baseUrl={AppRoutes.Landing}/>);
export const ArticlesViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.Article}/>);
export const CtfViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.CTF}/>);
export const TryHackMeViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.CTF_THM}/>);
export const HackTheBoxViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.CTF_HTB}/>);
export const OverTheWireViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.CTF_OTW}/>);
export const VulnhubViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.CTF_VULNHUB}/>);
export const TutorialViewer = () => (<ContentViewer baseUrl={AppContentBaseRoutes.Tutorial}/>);
