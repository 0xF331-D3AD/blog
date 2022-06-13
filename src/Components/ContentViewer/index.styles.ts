import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";

export const MarkdownWrapper = styled.div`
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
    
    ${Media.tablet`
        font-size: 14px;
    `}
`;
