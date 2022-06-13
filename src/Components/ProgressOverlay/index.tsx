import React from "react";
import {Overlay} from "../Overlay";
import {useWindowSize} from "../../Hooks/WindowHooks";
import {devices} from "../../SharedStyles/media";
import {ProgressOverlayContent} from "./index.styles";
import {FlexHourGlass} from "../HourGlass";
import {Theme} from "../../SharedStyles/theme";

type HourGlassSize = {
    width: number,
    height: number,
}

const initHourGlassSize: HourGlassSize = {
    width: 160,
    height: 180,
}

export const ProgressOverlay = () => {
    const [hourGlassSize, setHourGlassSize] = React.useState<HourGlassSize>(initHourGlassSize);
    const size = useWindowSize();

    React.useEffect(() => {
        const newSize = {...hourGlassSize};
        if (size.width < devices.phoneLg) {
            newSize.width = 60;
            newSize.height = 70;
        } else if (size.width < devices.tablet) {
            newSize.width = 90;
            newSize.height = 105;
        } else {
            newSize.width = initHourGlassSize.width;
            newSize.height = initHourGlassSize.height;
        }
        setHourGlassSize(newSize);
    }, [size]);

    return (
        <Overlay>
            <ProgressOverlayContent>
                <FlexHourGlass
                    height={hourGlassSize.height}
                    width={hourGlassSize.width}
                    glassColor={Theme.mediumForegroundColor}
                    backgroundColor={Theme.mediumBackground}
                    sandColor={Theme.lightForegroundColor}
                />
            </ProgressOverlayContent>
        </Overlay>
    )
}
