import {ContentPane, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<Boolean>(false);
    return (
        <SiteContent>
            <Header onMenuClick={() => setIsMenuOpened(!isMenuOpened)} />
            <ContentPane/>
        </SiteContent>
    );
}
