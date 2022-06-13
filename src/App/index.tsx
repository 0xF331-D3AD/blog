import {ArticleContentWrapper, ContentPane, SidebarAndContentWrapper, SiteContent} from "./index.styles";
import {Header} from "../Components/Header";
import React from "react";
import {SideBar} from "../Components/SideBar";
import {devices} from "../SharedStyles/media";
import {useWindowSize} from "../Hooks/WindowHooks";
import {ContentPaneInfiniteScroll} from "../Components/InfiniteScroll";
import {Matrix} from "../Components/Matrix/";
import {Route, Routes, useLocation} from "react-router-dom";
import {ComingSoon} from "./ComingSoon";
import {NotFound} from "./NotFound";
import {
    ArticlesViewer,
    CtfViewer,
    HackTheBoxViewer,
    LandingViewer,
    OverTheWireViewer,
    SmashTheStackViewer,
    TryHackMeViewer, TutorialViewer
} from "../Components/ContentViewer";
import {AppContentBaseRoutesForRouter, AppRoutes} from "../Enums/AppRoutes";

export const App = () => {
    const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false);
    const [isMatrixBlurred, setIsMatrixBlurred] = React.useState<boolean>(false);
    const location = useLocation();
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

    React.useEffect(() => {
        const blurred = location.pathname.endsWith('.md');
        setIsMatrixBlurred(blurred);
    }, [location]);

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
                                <Route path={AppContentBaseRoutesForRouter.Article} element={<ArticlesViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.CTF} element={<CtfViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.CTF_HTB} element={<HackTheBoxViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.CTF_OTW} element={<OverTheWireViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.CTF_STS} element={<SmashTheStackViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.CTF_THM} element={<TryHackMeViewer/>}/>
                                <Route path={AppContentBaseRoutesForRouter.Tutorial} element={<TutorialViewer/>}/>
                                <Route path={AppRoutes.NOT_FOUND} element={<NotFound/>}/>
                                <Route path={AppRoutes.COMING_SOON} element={<ComingSoon/>}/>
                                <Route path={AppRoutes.Landing} element={<LandingViewer/>}/>
                                <Route path="*" element={<NotFound/>}/>
                            </Routes>
                        </ContentPaneInfiniteScroll>
                    </ArticleContentWrapper>
                </ContentPane>
            </SidebarAndContentWrapper>
            <Matrix isBlurred={isMatrixBlurred} />
        </SiteContent>
    );
}
