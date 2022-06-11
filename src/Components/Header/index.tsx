import {HeaderContent, SidebarIcon} from "./index.styles";
import {faBars} from '@fortawesome/fontawesome-free-solid'

type Props = {
    onMenuClick: () => void,
}

export const Header = ({
                           onMenuClick = () => {
                           }
                       }: Props) => {
    return (
        <HeaderContent>
            {/* @ts-ignore */}
            <SidebarIcon icon={faBars}/>
        </HeaderContent>
    );
}
