import styled, {css} from 'styled-components';
import {Theme} from "../../SharedStyles/theme";
import {sideBarSize} from "../SideBar/index.styles";
import {Media} from "../../SharedStyles/media";

//@ts-ignore
const scrollCss = css`
    display: flex;
    flex-direction: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'row' : 'column')};
    gap: ${({gap}: { gap?: number }) => (gap || 0)}px;
    
    width: 100%;
    height: 100%;
    overflow-x: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'hidden' : 'scroll')};
      
    background-color: inherit;
      
    scrollbar-color: ${Theme.darkBackground} transparent;
    scrollbar-width: 1em;
       
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
       
    ::-webkit-scrollbar-thumb {
      outline: 1px solid slategrey;
    }
`;

// @ts-ignore
export const SideBarInfiniteScrollWrapper = styled.div`
    ${scrollCss}
`;

export const ContentTypeScrollWrapper = styled.div`
    ${scrollCss};
    
    width: calc(100% - ${sideBarSize + 192}px);
    min-width: 0;
    margin-left: auto;
    padding: 16px 96px;
    
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
`;
