import styled from "styled-components";
import Background from "../Assets/background.jpg";
import {headerHeight} from "../Components/Header/index.styles";
import {Theme} from "../SharedStyles/theme";
import {SharedStyles} from "../SharedStyles";

export const SiteContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;
`;

export const SidebarAndContentWrapper = styled.div`
    display: flex;
    height: 100%;
    
    height: calc(100% - ${headerHeight}px);
    max-height: calc(100% - ${headerHeight}px);
    
    overflow-x: hidden;
    overflow-y: hidden; 
`;

export const ContentPane = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;
    
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const Content = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    
    border-radius: 16px;
    border: 2px solid ${Theme.veryDarkForegroundColor};
    padding: 16px;
    
    ${SharedStyles.ellipsisOverflow}
    
    color: ${Theme.lightForegroundColor};
    background-color: ${Theme.darkBackground};
`;
