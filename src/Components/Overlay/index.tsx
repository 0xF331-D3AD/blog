import {OverlayWrapper, SideBarOverlayWrapper} from "./index.styles";
import {Component, MouseEventHandler, ReactElement} from "react";

type Props = {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    overlayIndex?: number;
    transparent?: boolean;
    children?: Component | Component[] | ReactElement<any, any> | ReactElement<any, any>[] | undefined | null;
    style?: any,
    onClick?: MouseEventHandler<HTMLDivElement>,
}

export const Overlay = ({
                            top = 0,
                            left = 0,
                            right = 0,
                            bottom = 0,
                            overlayIndex = 0,
                            transparent = false,
                            children,
                            style = {},
                            onClick = () => {
                            },
                        }: Props) => {
    return (
        <OverlayWrapper
            top={top}
            left={left}
            right={right}
            bottom={bottom}
            overlayIndex={overlayIndex}
            transparent={transparent}
            onClick={onClick}
            style={{...style}}
        >
            {/*@ts-ignore*/}
            {children}
        </OverlayWrapper>
    )
}

type SideBarProps = {
    children?: Component | Component[] | ReactElement<any, any> | ReactElement<any, any>[] | undefined | null;
    style?: any
    isOpened: boolean,
    onClick: MouseEventHandler<HTMLDivElement>,
}

export const SideBarOverlay = ({
                                   children,
                                   isOpened = true,
                                   style = {},
                                   onClick = () => {
                                   },
                               }: SideBarProps) => {

    return (
        <SideBarOverlayWrapper
            isOpened={isOpened}
            style={{...style}}
            onClick={onClick}
        >
            {/*@ts-ignore*/}
            {children}
        </SideBarOverlayWrapper>
    )
}
