import styled, {css} from "styled-components";
import {Media} from "../../SharedStyles/media";
import {headerHeight} from "../Header/index.styles";
import {sideBarSize} from "../SideBar/index.styles";

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
    
    background-color: ${({transparent}: { transparent: boolean }) => transparent ? 'transparent' : 'rgba(255, 255, 255, .4)'};
    z-index: ${({ overlayIndex }: { overlayIndex?: number }) => 10000 + Number(overlayIndex)};
`;

export const OverlayWrapper = styled.div`
    ${overlayCss}
`;

export const SideBarOverlayWrapper = styled.div`
    ${overlayCss}
    
    display: ${({ isOpened }: { isOpened: boolean }) => isOpened ? 'flex' : 'none'};
    
    top: ${headerHeight}px;
    left: 0;
    width: ${sideBarSize}px;
    max-height: calc(100% - ${headerHeight}px);
    
    ${Media.desktop`
        right: 0;
        width: 100%;
    `}
`;
