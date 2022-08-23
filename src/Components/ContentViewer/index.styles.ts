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
    
    pre {
        display: flex;   
        flex-direction: column;
        flex: 1;
        word-break: break-all;
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
    
    table {
        display: flex;
        flex-direction: column;
        
        margin-left: auto;
        margin-right: auto;
        
        width: 85%;
        
        ${Media.tablet`
            width: 100%;
        `}
        
        border-collapse: collapse;
        border: 1px solid ${Theme.lightForegroundColor};
        
        tr, th, thead {
            display: flex;
            flex: 1;
        }
        
        td, th {
            display: flex;
            flex: 1;
            word-break: break-all;
            border: 1px solid ${Theme.lightForegroundColor};
        }
    }
    
    blockquote {
        word-break: break-all;
        display: flex;
        flex-direction: column;
        padding: 4px 18px;
        background-color: ${Theme.lightBackground};
        
        border-radius: 16px;
        
        ${Media.phoneLg`
            width: 85%;
            margin-left: auto;
            margin-right: auto;
        `}
        
        p {
            display: flex;
        }
    }
    
    code {
        color: ${Theme.codeColor};
        overflow-x: scroll;
    }

    ${Media.tablet`
        font-size: 14px;
    `}
`;
