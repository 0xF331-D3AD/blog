import React from "react";
import {ComingSoonContent, ComingSoonText, ComingSoonWrapper,} from "./index.styles";
import {FlexHourGlass} from "../../Components/HourGlass";
import {Theme} from "../../SharedStyles/theme";
import {useWindowSize} from "../../Hooks/WindowHooks";
import {devices} from "../../SharedStyles/media";

type HourGlassSize = {
    width: number,
    height: number,
}

const initHourGlassSize: HourGlassSize = {
    width: 120,
    height: 135,
}

export const ComingSoon = () => {
    const [hourGlassSize, setHourGlassSize] = React.useState<HourGlassSize>(initHourGlassSize);
    const size = useWindowSize();

    React.useEffect(() => {
        const newSize = {...hourGlassSize};
        if (size.width < devices.phoneLg) {
            newSize.width = 40;
            newSize.height = 45;
        } else if (size.width < devices.tablet) {
            newSize.width = 80;
            newSize.height = 90;
        } else {
            newSize.width = initHourGlassSize.width;
            newSize.height = initHourGlassSize.height;
        }
        setHourGlassSize(newSize);
    }, [size]);

    return (
        <ComingSoonWrapper>
            <ComingSoonContent>
                <FlexHourGlass
                    height={hourGlassSize.height}
                    width={hourGlassSize.width}
                    glassColor={Theme.mediumForegroundColor}
                    backgroundColor={Theme.darkBackground}
                    sandColor={Theme.lightForegroundColor}
                />
                <ComingSoonText>
                    Looks like you're on a page that has no content yet!
                    <br/>
                    <br/>
                    Please, come again later
                </ComingSoonText>
            </ComingSoonContent>
        </ComingSoonWrapper>
    )
}
