import React from "react";
import {HourGlass} from "../../Components/HourGlass";
import {Theme} from "../../SharedStyles/theme";

export const ComingSoon = () => {
    return (
        <div>
            <HourGlass
                height={180}
                width={160}
                glassColor={Theme.mediumForegroundColor}
                backgroundColor={Theme.darkBackground}
                sandColor={Theme.lightForegroundColor}
            />
        </div>
    )
}
