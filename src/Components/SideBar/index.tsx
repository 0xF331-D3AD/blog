import {SideBarContent} from "./index.styles";

type Props = {
    isOpened: boolean,
}

export const SideBar = ({
    isOpened = false,
}: Props) => {
    return (
        <SideBarContent></SideBarContent>
    );
};
