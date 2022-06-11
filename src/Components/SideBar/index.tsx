import {
    SideBarContent,
    ArticlesIconSVG,
    HTBIconSVG,
    OTWIconSVG,
    THMIconSVG,
    STSIconSVG,
    TutorialsIconSVG,
    SideBarItem
} from "./index.styles";
import {InfiniteScroll} from "../InfiniteScroll";
import {useNavigate} from "react-router-dom";
import {BaseRoutes} from "../../Enums";
import React from "react";
import {StyledComponent} from "styled-components";

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
};

export const SideBar = ({
                            isOpened = false,
                        }: Props) => {
    const navigate = useNavigate();

    return (
        <SideBarContent isOpened={isOpened}>
            <InfiniteScroll>
                {sideBarContent.sort((c1, c2) => c1.title.localeCompare(c2.title)).map(c => {
                    const Icon = c.icon;
                    return (
                        <SideBarItem onClick={() => navigate(c.path)}>
                            <Icon />
                            {c.title}
                        </SideBarItem>
                    )
                })}
            </InfiniteScroll>
        </SideBarContent>
    );
};
