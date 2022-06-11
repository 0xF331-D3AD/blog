import {SideBarContent, SideBarItem} from "./index.styles";
import {InfiniteScroll} from "../InfiniteScroll";

type Props = {
    isOpened: boolean,
}

export const SideBar = ({
    isOpened = false,
}: Props) => {
    const list = [];
    for (let i = 0; i <= 80; i++) {
        list.push(`This is item #${i}`);
    }
    return (
        <SideBarContent isOpened={isOpened}>
            <InfiniteScroll>
                {list.map(s => (
                    <SideBarItem>{s}</SideBarItem>
                ))}
            </InfiniteScroll>
        </SideBarContent>
    );
};
