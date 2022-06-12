import {ArticleContentWrapper, ContentPane, SidebarAndContentWrapper, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";
import {SideBar} from "../Components/SideBar";
import {devices} from "../SharedStyles/media";
import {useWindowSize} from "../Hooks/WindowHooks";
import {ContentPaneInfiniteScroll} from "../Components/InfiniteScroll";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
    const size = useWindowSize();

    if (document?.getElementById('root')?.style?.height) {
        // @ts-ignore
        document.getElementById('root').style.height = window.innerHeight + 'px';
    }

    React.useEffect(() => {
        const isVisibleBySize = size.width >= devices.desktop;
        setIsMenuOpened(isVisibleBySize);
    }, [size]);

    return (
        <SiteContent>
            <Header
                onMenuClick={() => setIsMenuOpened(!isMenuOpened)}
            />
            <SidebarAndContentWrapper>
                <SideBar
                    isOpened={isMenuOpened}
                    setIsOpened={setIsMenuOpened}
                    onSideBarItemClick={() => {
                        if (size.width < devices.desktop) {
                            setIsMenuOpened(false);
                        }
                    }}
                />
                <ContentPane>
                    <ArticleContentWrapper>
                        <ContentPaneInfiniteScroll>

                        </ContentPaneInfiniteScroll>
                    </ArticleContentWrapper>
                </ContentPane>
            </SidebarAndContentWrapper>
        </SiteContent>
    );
}
