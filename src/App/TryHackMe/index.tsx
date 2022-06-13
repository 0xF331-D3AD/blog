import React from "react";
import {useLocation} from "react-router-dom";
import {buildFileUrlFromPathname} from "../../Utils/MarkdownUtils";

export const TryHackMe = () => {
    const [content, setContent] = React.useState('');

    const location = useLocation();

    React.useEffect(() => {
        const contentUrl = buildFileUrlFromPathname(location.pathname);
        console.log(contentUrl);
    }, [location]);

    return (
        <div></div>
    )
}
