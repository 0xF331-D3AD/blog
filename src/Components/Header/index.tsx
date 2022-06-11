import {HeaderContent, SidebarIcon} from "./index.styles";
import { faBars } from '@fortawesome/fontawesome-free-solid'

export const Header = () => {
    return (
        <HeaderContent>
            {/* @ts-ignore */}
            <SidebarIcon icon={faBars} />
        </HeaderContent>
    );
}
