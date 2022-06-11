import {ContentPane, SidebarAndContentWrapper, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";
import {SideBar} from "../Components/SideBar";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
    return (
        <SiteContent>
            <Header onMenuClick={() => setIsMenuOpened(!isMenuOpened)}/>
            <SidebarAndContentWrapper>
                <SideBar isOpened={isMenuOpened}/>
                <ContentPane/>
            </SidebarAndContentWrapper>
        </SiteContent>
    );
}
