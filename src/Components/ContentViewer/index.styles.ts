import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";

export const MarkdownWrapper = styled.div`
    color: ${Theme.lightForegroundColor};
    
    a {
        :link {
            color: ${Theme.linkColor};
        }
        
        :visited {
            color: ${Theme.visitedLinkColor};
        }
    }
`;
