import {ArticleContentWrapper, ContentPane, SidebarAndContentWrapper, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";
import {SideBar} from "../Components/SideBar";
import {devices} from "../SharedStyles/media";
import {useWindowSize} from "../Hooks/WindowHooks";
import {ContentPaneInfiniteScroll} from "../Components/InfiniteScroll";
import {Matrix} from "../Components/Matrix/";
import {Route, Routes} from "react-router-dom";
import {BaseRoutes} from "../Enums";
import {ComingSoon} from "./ComingSoon";
import {NotFound} from "./NotFound";
import {Environment} from "../Enums/Environment";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
    const size = useWindowSize();

    document.body.style.overflowY = 'hidden';

    React.useEffect(() => {
        const isVisibleBySize = size.width >= devices.desktop;
        setIsMenuOpened(isVisibleBySize);
    }, [size]);

    const onSideBarItemClick = () => {
        if (size.width < devices.desktop) {
            setIsMenuOpened(false);
        }
    }

    console.log(Environment.BASE_LOCATION);

    return (
        <SiteContent>
            <Header
                onMenuClick={() => setIsMenuOpened(!isMenuOpened)}
            />
            <SidebarAndContentWrapper>
                <SideBar
                    isOpened={isMenuOpened}
                    setIsOpened={setIsMenuOpened}
                    onSideBarItemClick={onSideBarItemClick}
                />
                <ContentPane>
                    <ArticleContentWrapper>
                        <ContentPaneInfiniteScroll>
                            <Routes>
                                <Route path={BaseRoutes.Article} element={<ComingSoon/>}/>
                                <Route path={BaseRoutes.CTF_HTB} element={<ComingSoon/>}/>
                                <Route path={BaseRoutes.CTF_OTW} element={<ComingSoon/>}/>
                                <Route path={BaseRoutes.CTF_STS} element={<ComingSoon/>}/>
                                <Route path={BaseRoutes.CTF_THM} element={<ComingSoon/>}/>
                                <Route path={BaseRoutes.Tutorial} element={<ComingSoon/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </ContentPaneInfiniteScroll>
                    </ArticleContentWrapper>
                </ContentPane>
            </SidebarAndContentWrapper>
            <Matrix/>
        </SiteContent>
    );
}
