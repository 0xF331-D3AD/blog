import styled, {css} from "styled-components";
import {Media} from "../../SharedStyles/media";
import {headerHeight} from "../Header/index.styles";
import {sideBarSize} from "../SideBar/index.styles";
import {Theme} from "../../SharedStyles/theme";

// @ts-ignore
const overlayCss = css`
    position: absolute;
    top: ${({top}: { top?: number }) => Number(top)}px;
    left: ${({left}: { left?: number }) => Number(left)}px;
    bottom: ${({bottom}: { bottom?: number }) => Number(bottom)}px;
    right: ${({right}: { right?: number }) => Number(right)}px;
    width: 100%;
    height: 100%;
    display: flex;
    
    background-color: ${({transparent}: { transparent: boolean }) => transparent ? 'transparent' : Theme.overlayColor};
    z-index: ${({overlayIndex}: { overlayIndex?: number }) => 10000 + Number(overlayIndex)};
`;

export const OverlayWrapper = styled.div`
    ${overlayCss}
`;

export const SideBarOverlayWrapper = styled.div`
    ${overlayCss}
    
    display: ${({isOpened}: { isOpened: boolean }) => isOpened ? 'flex' : 'none'};
    
    top: ${headerHeight}px;
    left: 0;
    width: ${sideBarSize}px;
    height: 100vh;
    max-height: 100vh;
    
    ${Media.desktop`
        right: 0;
        width: 100%;
        z-index: 10000;
    `}
`;
