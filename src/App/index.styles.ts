import styled from "styled-components";
import {headerHeight} from "../Components/Header/index.styles";
import {Theme} from "../SharedStyles/theme";
import {sideBarSize} from "../Components/SideBar/index.styles";
import {Media} from "../SharedStyles/media";

export const SiteContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;
    
    overflow: hidden;
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
`;

export const ArticleContentWrapper = styled.div`
    width: calc(100% - ${sideBarSize + 192}px);
    min-width: 0;
    margin-left: auto;
    padding: 16px 96px;
    
    border: 2px solid ${Theme.darkBackground};
    
    ${Media.desktopMd`
        width: calc(100% - ${sideBarSize + 128}px);
        padding: 16px 64px;
    `}
    
    ${Media.desktop`
        width: calc(100% - 128px);
        padding: 16px 64px;
    `}

    ${Media.tablet`
        width: calc(100% - 64px);
        padding: 16px 32px;
    `}
    
    ${Media.phoneLg`
        width: calc(100% - 32px);
        padding: 16px;
    `}
    
    ${Media.phoneMd`
        width: calc(100% - 24px);
        padding: 12px 12px 16px 12px;
    `}
`;
