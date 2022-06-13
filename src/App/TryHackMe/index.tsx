import React from "react";
import {useLocation} from "react-router-dom";
import {buildFileUrlFromPathname} from "../../Utils/MarkdownUtils";
import {getMarkdown} from "../../Service/MarkdownService";
import {Theme} from "../../SharedStyles/theme";
import {ErrorModal} from "../../Components/ErrorModal";
import {ProgressOverlay} from "../../Components/ProgressOverlay";
import {AppContentBaseRoutes} from "../../Enums/AppRoutes";

export const TryHackMe = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');

    const baseUrl = AppContentBaseRoutes.CTF_THM;

    const location = useLocation();

    const fetchContent = async () => {
        // Add .md to pathname to get an error
        const contentUrl = buildFileUrlFromPathname(location.pathname);
        setLoading(true);
        try {
            const markdown = await getMarkdown(contentUrl);
            setContent(markdown);
        } catch (e) {
            // @ts-ignore
            if (e.name === 'AxiosError' && e.status === 404) {
                const indexUrl = buildFileUrlFromPathname(baseUrl);
                try {
                    const indexMarkdown = await getMarkdown(indexUrl);
                    setContent(indexMarkdown);
                } catch (innerError) {
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
            {content}
            {
                error && (
                    <ErrorModal
                        close={() => setError('')}
                        message={error}
                    />
                )
            }
            {loading && !error && (
                <ProgressOverlay />
            )}
        </div>
    )
}
