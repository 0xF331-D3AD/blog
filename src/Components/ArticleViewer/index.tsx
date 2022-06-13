import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {buildFileUrlFromPathname} from "../../Utils/MarkdownUtils";
import {getMarkdown} from "../../Service/MarkdownService";
import {Theme} from "../../SharedStyles/theme";
import {ErrorModal} from "../ErrorModal";
import {ProgressOverlay} from "../ProgressOverlay";
import {AppContentBaseRoutes, AppRoutes} from "../../Enums/AppRoutes";
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math';
import {Environment} from "../../Enums/Environment";

type Props = {
    baseUrl: string,
}

export const ArticleViewer = ({
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
            const markdown = await getMarkdown(contentUrl);
            setContent(markdown);
        } catch (e) {
            // @ts-ignore
            if (e.name === 'AxiosError' && e.code === "ERR_BAD_REQUEST") {
                const indexUrl = buildFileUrlFromPathname(baseUrl);
                try {
                    const indexMarkdown = await getMarkdown(indexUrl);
                    setContent(indexMarkdown);
                    navigate(baseUrl);
                } catch (innerError) {
                    navigate(Environment.BASE_LOCATION);
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
        <div style={{
            color: Theme.lightForegroundColor,
        }}>
            <ReactMarkdown remarkPlugins={[gfm, remarkMath]}>
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
        </div>
    )
}

export const LandingViewer = () => (<ArticleViewer baseUrl={AppRoutes.Landing}/>);
export const CtfViewer = () => (<ArticleViewer baseUrl={AppContentBaseRoutes.CTF}/>);
export const TryHackMeViewer = () => (<ArticleViewer baseUrl={AppContentBaseRoutes.CTF_THM}/>);
export const HackTheBoxViewer = () => (<ArticleViewer baseUrl={AppContentBaseRoutes.CTF_HTB}/>);
export const OverTheWireViewer = () => (<ArticleViewer baseUrl={AppContentBaseRoutes.CTF_OTW}/>);
export const SmashTheStackViewer = () => (<ArticleViewer baseUrl={AppContentBaseRoutes.CTF_STS}/>);
