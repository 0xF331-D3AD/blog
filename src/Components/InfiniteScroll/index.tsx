import {ContentTypeScrollWrapper, ModalInfiniteScrollWrapper, SideBarInfiniteScrollWrapper} from "./index.styles";
import React from "react";

type InfiniteScrollProps = {
    children: React.ReactNode | React.ReactNode[],
    horizontal?: boolean,
    gap?: number,
}

export const SideBarInfiniteScroll = ({
                                          children = [],
                                          horizontal = false,
                                          gap = 0,
                                      }: InfiniteScrollProps) => {
    return (
        // @ts-ignore
        <SideBarInfiniteScrollWrapper horizontal={horizontal} gap={gap}>
            {children}
        </SideBarInfiniteScrollWrapper>
    );
};

export const ModalInfiniteScroll = ({
                                        children = [],
                                        horizontal = false,
                                        gap = 0,
                                    }: InfiniteScrollProps) => {
    return (
        // @ts-ignore
        <ModalInfiniteScrollWrapper horizontal={horizontal} gap={gap}>
            {children}
        </ModalInfiniteScrollWrapper>
    );
};

export const ContentPaneInfiniteScroll = ({
                                              children = [],
                                              horizontal = false,
                                              gap = 0,
                                          }: InfiniteScrollProps) => {
    return (
        // @ts-ignore
        <ContentTypeScrollWrapper horizontal={horizontal} gap={gap}>
            {children}
        </ContentTypeScrollWrapper>
    );
};

