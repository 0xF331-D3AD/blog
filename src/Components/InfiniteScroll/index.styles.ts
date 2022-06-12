import styled, {css} from 'styled-components';
import {Theme} from "../../SharedStyles/theme";
import {headerHeight} from "../Header/index.styles";

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
    
    gap: 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    
    // 2*24px -this element's padding
    width: calc(100% - 2*24px);
    // 32px - parent's padding
    height: calc(100vh - ${headerHeight}px - 32px - 2*24px);
    
    padding: 24px;
    
    border-radius: 16px;
    border: 2px solid ${Theme.veryDarkForegroundColor};
    
    background-color: ${Theme.darkBackground};
    
    // background-color: red;
    //
    // div {
    //     display: flex;
    //     min-width: 100%;
    //    
    //     font-size: 18px;
    //     line-height: 20px;
    //     color: white;
    // }
`;
