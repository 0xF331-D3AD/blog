import {
    ArticlesIconSVG,
    HTBIconSVG,
    OTWIconSVG,
    SideBarBottom,
    SideBarContent,
    SideBarItem,
    STSIconSVG,
    THMIconSVG,
    TutorialsIconSVG,
    VirusIconSVG,
} from "./index.styles";
import {SideBarInfiniteScroll} from "../InfiniteScroll";
import {useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {StyledComponent} from "styled-components";
import {SideBarOverlay} from "../Overlay";
import {AppContentBaseRoutes} from "../../Enums/AppRoutes";

type SideBarContentType = {
    icon: StyledComponent<any, any>,
    title: string,
    path: string,
};

const sideBarContent: SideBarContentType[] = [
    {
        title: 'Articles',
        path: AppContentBaseRoutes.Article,
        icon: ArticlesIconSVG,
    },
    {
        title: 'CTF HTB',
        path: AppContentBaseRoutes.CTF_HTB,
        icon: HTBIconSVG,
    },
    {
        title: 'CTF OTW',
        path: AppContentBaseRoutes.CTF_OTW,
        icon: OTWIconSVG,
    },
    {
        title: 'CTF THM',
        path: AppContentBaseRoutes.CTF_THM,
        icon: THMIconSVG,
    },
    {
        title: 'CTF STS',
        path: AppContentBaseRoutes.CTF_STS,
        icon: STSIconSVG,
    },
    {
        title: 'Tutorials',
        path: AppContentBaseRoutes.Tutorial,
        icon: TutorialsIconSVG,
    },
];

type Props = {
    isOpened: boolean,
    setIsOpened: (newIsOpened: boolean) => void,
    onSideBarItemClick?: () => void,
};

export const SideBar = ({
                            isOpened = false,
                            setIsOpened = () => {
                            },
                            onSideBarItemClick = () => {
                            },
                        }: Props) => {
    const [selectedSection, setSelectedSection] = React.useState<SideBarContentType | undefined>(undefined);
    const location = useLocation();
    const navigate = useNavigate();

    const onItemClick = (item: SideBarContentType) => {
        if (item !== selectedSection) {
            setSelectedSection(item);
            navigate(item.path);
            onSideBarItemClick();
        } else {
            navigate(item.path);
            onSideBarItemClick();
        }
    }

    React.useEffect(() => {
        const itemsByPathName: SideBarContentType[] = sideBarContent.filter(c => {
            return location.pathname === c.path || location.pathname.startsWith(c.path + '/')
        });
        const item = itemsByPathName.length ? itemsByPathName[0] : undefined;
        setSelectedSection(item);
        onSideBarItemClick();
    }, [location]);

    return (
        <SideBarOverlay
            isOpened={isOpened}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setIsOpened(!isOpened);
                }
            }}
        >
            <SideBarContent isOpened={isOpened}>
                <SideBarInfiniteScroll>
                    {sideBarContent
                        .sort((c1, c2) => c1.title.localeCompare(c2.title))
                        .map(c => {
                            const Icon = c.icon;
                            const isSelected = c.title === selectedSection?.title;
                            return (
                                <SideBarItem
                                    isSelected={isSelected}
                                    onClick={() => onItemClick(c)}
                                >
                                    <Icon/>
                                    {c.title}
                                </SideBarItem>
                            )
                        })}
                </SideBarInfiniteScroll>
                <SideBarBottom>
                    0xF331-D3AD at 2022
                    <VirusIconSVG/>
                </SideBarBottom>
            </SideBarContent>
        </SideBarOverlay>
    );
};
