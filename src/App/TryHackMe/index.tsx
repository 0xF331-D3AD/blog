import React from "react";
import {useLocation} from "react-router-dom";
import {buildFileUrlFromPathname} from "../../Utils/MarkdownUtils";
import {getMarkdown} from "../../Service/MarkdownService";
import {Theme} from "../../SharedStyles/theme";
import {ErrorModal} from "../../Components/ErrorModal";

export const TryHackMe = () => {
    const [error, setError] = React.useState<string>('');
    const [content, setContent] = React.useState<string>('');

    const location = useLocation();

    const fetchContent = async () => {
        // Add .md to pathname to get an error
        const contentUrl = buildFileUrlFromPathname(location.pathname);
        try {
            const markdown = await getMarkdown(contentUrl);
            setContent(markdown);
        }catch (e) {
            // @ts-ignore
            if (e.name === 'AxiosError' && e.status === 404) {
                // Redirect to content base url and show modal with error message
            } else {
                // Show error message
            }
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
        </div>
    )
}
