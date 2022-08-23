// @ts-nocheck
import React from "react";
import {
    Bond,
    BondBottomTriangle,
    BondTopTriangle,
    BottomHalfGlass,
    Glass,
    HourGlassContainer,
    HourGlassFlexWrapper,
    HourGlassWrapper,
    Layer,
    LayerOneBottomTriangle,
    LayerOneTopTriangle,
    LayerTwoBottomTriangle,
    LayerTwoTopTriangle,
    RotateWrapper,
    SandStream,
    TopHalfGlass,
} from "./index.styles";

type Props = {
    width: number,
    height: number,
    glassColor: string,
    backgroundColor: string,
    sandColor: string,
}

export const HourGlass = ({
                              width,
                              height,
                              glassColor,
                              backgroundColor,
                              sandColor,
                          }: Props) => {
    return (
        <HourGlassWrapper>
            <HourGlassContainer>
                <Glass width={width} height={height}>
                    <TopHalfGlass width={width} height={height} glassColor={glassColor}/>
                    <BottomHalfGlass width={width} height={height} glassColor={glassColor}/>
                </Glass>
                <Layer width={width} height={height}>
                    <div>
                        <LayerOneTopTriangle width={width} height={height} backgroundColor={backgroundColor}/>
                    </div>
                    <RotateWrapper>
                        <LayerOneBottomTriangle width={width} height={height} sandColor={sandColor}/>
                    </RotateWrapper>
                </Layer>
                <Layer width={width} height={height}>
                    <div>
                        <LayerTwoTopTriangle width={width} height={height} sandColor={sandColor}/>
                    </div>
                    <RotateWrapper>
                        <LayerTwoBottomTriangle width={width} height={height} backgroundColor={backgroundColor}/>
                    </RotateWrapper>
                </Layer>
                <SandStream width={width} height={height} sandColor={sandColor}/>
                <Bond width={width} height={height}>
                    <BondTopTriangle width={width} height={height} glassColor={glassColor}/>
                    <BondBottomTriangle width={width} height={height} glassColor={glassColor}/>
                </Bond>
            </HourGlassContainer>
        </HourGlassWrapper>
    )
};

export const FlexHourGlass = ({
                                  width,
                                  height,
                                  glassColor,
                                  backgroundColor,
                                  sandColor,
                              }: Props) => {
    return (
        <HourGlassFlexWrapper
            width={width}
            height={height}
        >
            <HourGlass
                width={width}
                height={height}
                glassColor={glassColor}
                backgroundColor={backgroundColor}
                sandColor={sandColor}
            />
        </HourGlassFlexWrapper>
    )
};
