import {InfiniteScrollWrapper} from "./index.styles";
import React from "react";

type InfiniteScrollProps = {
    children: React.ReactNode | React.ReactNode[],
    horizontal?: boolean,
    gap?: number,
}

export const InfiniteScroll = ({
                                   children = [],
                                   horizontal = false,
                                   gap = 0,
                               }: InfiniteScrollProps) => {
    return (
        // @ts-ignore
        <InfiniteScrollWrapper horizontal={horizontal} gap={gap}>
            {children}
        </InfiniteScrollWrapper>
    );
};
