import styled from "styled-components";
import {Theme} from "../../../SharedStyles/theme";

export const IndexPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Articles = styled.ul`
    border: none !important;
    
    border-radius: 10px;
`;

export const ArticleGroupWrapper = styled.li`
    border: none !important;
    border-bottom: 1px solid ${Theme.lightForegroundColor} !important;
    border-radius: 10px 10px 0px 0px;
    
    :hover {
        background-color: ${Theme.darkForegroundColor};
    }
`;

export const ArticleGroupHeader = styled.div`
    border: none !important;
    
    font-weight: bold;
    font-size: 28px;
    line-height: 30px;
`;

export const ArticlesGroup = styled.ol`
    list-style-type: upper-roman !important;
    border: none !important;
`;

export const ArticleLinkWrapper = styled.li`
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
    
    padding: 4px;
    
    a {
        :hover {
            text-decoration: underline;
        }
    }
`;

