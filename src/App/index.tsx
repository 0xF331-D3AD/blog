import {ContentPane, SidebarAndContentWrapper, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";
import {SideBar} from "../Components/SideBar";
import {devices} from "../SharedStyles/media";
import {useWindowSize} from "../Hooks/WindowHooks";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
    const size = useWindowSize();

    React.useEffect(() => {
        const isVisibleBySize = size.width >= devices.desktop;
        setIsMenuOpened(isVisibleBySize);
    }, [size]);

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
