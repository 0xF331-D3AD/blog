import styled, {css} from 'styled-components';
import {Theme} from "../../SharedStyles/theme";
import {headerHeight} from "../Header/index.styles";
import {SharedStyles} from "../../SharedStyles";
import {devices} from "../../SharedStyles/media";

//@ts-ignore
const scrollCss = css`
    display: flex;
    flex-direction: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'row' : 'column')};
    gap: ${({gap}: { gap?: number }) => (gap || 0)}px;
    
    width: 100%;
    height: 100%;
    overflow-x: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'auto' : 'hidden')};
    overflow-y: ${({horizontal}: { horizontal: boolean }) => (horizontal ? 'hidden' : 'auto')};
      
    background-color: inherit;
    
    ${SharedStyles.scrollBarStyle};
`;

// @ts-ignore
export const SideBarInfiniteScrollWrapper = styled.div`
    ${scrollCss}
    
    gap: 4px;
    
    //92px - sidebar bottom with gap
    height: calc(100vh - ${headerHeight}px - 60px);
    
    @media(max-height: ${devices.phoneLg}px){
        height: calc(100vh - ${headerHeight}px);
    }
`;

export const ModalInfiniteScrollWrapper = styled.div`
    ${scrollCss}
    
    overflow-x: hidden;
    overflow-y: auto;
`;

export const ContentTypeScrollWrapper = styled.div`
    ${scrollCss};
    
    overflow-x: hidden;
    overflow-y: auto;
    
    // 2*24px -this element's padding
    width: calc(100% - 2*24px);
    // 32px - parent's padding
    height: calc(100vh - ${headerHeight}px - 32px - 2*24px);
    
    padding: 24px;
    
    border-radius: 16px;
    border: 2px solid ${Theme.veryDarkForegroundColor};
    
    background-color: ${Theme.darkBackground};
`;
