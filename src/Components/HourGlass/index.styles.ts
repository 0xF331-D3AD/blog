// @ts-nocheck
import styled, {css, keyframes} from "styled-components";

const sendFlowKeyframes = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    90% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    100% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
`;

const hourglassSpinKeyframes = keyframes`
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    90% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
`;

export const HourGlassWrapper = styled.div`
    position: absolute;
`;

export const HourGlassFlexWrapper = styled.div`
    display: flex;
    
    width: ${({width}: { width: number }) => width}px;
    height: ${({height}: { height: number }) => height}px;
`;

export const HourGlassContainer = styled.div`
    position: relative;
    -webkit-animation: ${hourglassSpinKeyframes} ease-in 3s infinite;
    animation: ${hourglassSpinKeyframes} ease-in 3s infinite;
    
    width: ${({width}: { width: number }) => width}px;
    height: ${({height}: { height: number }) => height}px;
`;

export const Glass = styled.div`
    width: ${({width}: { width: number }) => width}px;
    height: ${({height}: { height: number }) => height}px;
`;

const triangleCss = css`
    border-color: transparent;
    border-style: solid;
    border-width: ${({
                                                 width,
                                                 height
                                             }: { width: number, height: number }) => `${2 / 3 * height}px ${0.5 * width}px 0 ${0.5 * width}px`};
    width: 0;
    height: 0;
`;

const upsideDownCss = css`
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
`;

export const TopHalfGlass = styled.div`
    ${triangleCss};
    
    border-top-color: ${({glassColor}: { glassColor: string }) => glassColor};
`;

export const BottomHalfGlass = styled.div`
    ${triangleCss};
    ${upsideDownCss};
    
    border-top-color: ${({glassColor}: { glassColor: string }) => glassColor};
    margin-top: ${({height}: { height: number }) => -1 / 3 * height}px;
`;

export const Layer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    
    width: ${({width}: { width: number }) => width}px;
    height: ${({height}: { height: number }) => height}px;
    
    -webkit-transform: scale(.75);
    -webkit-transform-origin: center top;
    transform: scale(.75);
    transform-origin: center top;
`;

export const LayerOneTopTriangle = styled.div`
    ${triangleCss};
    position: absolute;
    // 0.2618 radians = 15 degrees
    bottom: ${({height}: { height: number }) => Math.ceil(height * Math.sin(0.2618))}px;
    
    border-top-color:  ${({backgroundColor}: { backgroundColor: string }) => backgroundColor};
`;

export const LayerOneBottomTriangle = styled.div`
    ${triangleCss};
    position: absolute;
    // 0.2618 radians = 15 degrees
    bottom: ${({height}: { height: number }) => Math.ceil(height * Math.sin(0.2618) + height / 3)}px;
    
    border-top-color: ${({sandColor}: { sandColor: string }) => sandColor};
`;

const layerTwoFlowAnimation = css`
    -webkit-transform-origin: center bottom;
    -webkit-animation: ${sendFlowKeyframes} 3s ease-in infinite;
    transform-origin: center bottom;
    animation: ${sendFlowKeyframes} 3s ease-in infinite;
`;

export const LayerTwoTopTriangle = styled.div`
    ${triangleCss};
    position: absolute;
    // 0.2618 radians = 15 degrees
    bottom: ${({height}: { height: number }) => Math.ceil(height * Math.sin(0.2618))}px;
    
    border-top-color: ${({sandColor}: { sandColor: string }) => sandColor};
    
    ${layerTwoFlowAnimation}
`;

export const LayerTwoBottomTriangle = styled.div`
    ${triangleCss};
    position: absolute;
    // 0.2618 radians = 15 degrees
    bottom: ${({height}: { height: number }) => Math.ceil(height * Math.sin(0.2618) + height / 3)}px;
    
    border-top-color:  ${({backgroundColor}: { backgroundColor: string }) => backgroundColor};
    
    ${layerTwoFlowAnimation}
`;

export const RotateWrapper = styled.div`
    ${upsideDownCss}
`;

export const SandStream = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: ${({width}: { width: number }) => Math.ceil(-0.5 * width * 0.075)}px;
    width: ${({width}: { width: number }) => Math.ceil(width * 0.075)}px;
    height: ${({height}: { height: number }) => Math.ceil(height / 2 - height / 4 * Math.sin(0.2618))}px;
    background: ${({sandColor}: { sandColor: string }) => sandColor};
`;

export const Bond = styled.div`
    position: absolute;
    left: ${({width}: { width: number }) => width / 2}px;
    top: ${({height}: { height: number }) => height / 2}px;
    margin-left: ${({width}: { width: number }) => -1 * width / 8}px;
    margin-top: ${({height}: { height: number }) => -1 * height / 18}px;
    width: 0;
    height: 0;
`;

export const BondTopTriangle = styled.div`
    ${triangleCss}
    
    border-top-color: ${({glassColor}: { glassColor: string }) => glassColor};;
    width: ${({width}: { width: number }) => width / 8}px;
    border-width: ${({
                                                                                                                                                                                                                         width,
                                                                                                                                                                                                                         height
                                                                                                                                                                                                                     }: { width: number, height: number }) => `${height / 18}px ${width / 16}px 0 ${width / 16}px`};
`;

export const BondBottomTriangle = styled.div`
    ${triangleCss}
    
    border-bottom-color: ${({glassColor}: { glassColor: string }) => glassColor};
    margin-top: ${({height}: { height: number }) => -1 * height / 18}px;
    border-width: ${({
                                                                                                                                                                                                                                             width,
                                                                                                                                                                                                                                             height
                                                                                                                                                                                                                                         }: { width: number, height: number }) => `0 ${width / 8}px ${height / 9}px ${width / 8}px`};
`;
