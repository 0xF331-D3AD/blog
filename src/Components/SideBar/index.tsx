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
import {useNavigate} from "react-router-dom";
import {BaseRoutes} from "../../Enums";
import React from "react";
import {StyledComponent} from "styled-components";
import {SideBarOverlay} from "../Overlay";

type SideBarContentType = {
    icon: StyledComponent<any, any>,
    title: string,
    path: string,
};

const sideBarContent: SideBarContentType[] = [
    {
        title: 'Articles',
        path: BaseRoutes.Article,
        icon: ArticlesIconSVG,
    },
    {
        title: 'CTF HTB',
        path: BaseRoutes.CTF_HTB,
        icon: HTBIconSVG,
    },
    {
        title: 'CTF OTW',
        path: BaseRoutes.CTF_OTW,
        icon: OTWIconSVG,
    },
    {
        title: 'CTF THM',
        path: BaseRoutes.CTF_THM,
        icon: THMIconSVG,
    },
    {
        title: 'CTF STS',
        path: BaseRoutes.CTF_STS,
        icon: STSIconSVG,
    },
    {
        title: 'Tutorials',
        path: BaseRoutes.Tutorial,
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
    const navigate = useNavigate();

    const onItemClick = (item: SideBarContentType) => {
        if (item !== selectedSection) {
            setSelectedSection(item);
            navigate(item.path);
            onSideBarItemClick();
        }
    }

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
