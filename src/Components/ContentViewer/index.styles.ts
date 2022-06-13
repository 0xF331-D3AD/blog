import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";

export const MarkdownWrapper = styled.div`
    padding-bottom: 24px;
    
    color: ${Theme.lightForegroundColor};
    
    font-size: 16px;
    
    a {
        :link {
            color: ${Theme.linkColor};
        }
        
        :visited {
            color: ${Theme.visitedLinkColor};
        }
    }
    
    input[type="checkbox"] {
        width: 18px;
        height: 18px;
        
        ${Media.tablet`
            width: 16px;
            height: 16px;
        `}
    }
    
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        
        width: 70%;
        height: 70%;
        
        ${Media.tablet`
            width: 90%;
            height: 90%;
        `}
    }

    ${Media.tablet`
        font-size: 14px;
    `}
`;
