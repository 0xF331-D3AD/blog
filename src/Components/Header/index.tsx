import {AnonymousAvatar, Avatar, AvatarInfo, HeaderContent, MenuIcon, Username} from "./index.styles";
import {faBars} from '@fortawesome/fontawesome-free-solid'
import {UserAvatarInfo} from "../../Types/UserTypes";

type Props = {
    onMenuClick: () => void,
    userInfo?: UserAvatarInfo,
}

export const Header = ({
                           onMenuClick = () => {
                           },
                           userInfo = {
                               username: 'Anonymous',
                           }
                       }: Props) => {
    return (
        <HeaderContent>
            {/* @ts-ignore */}
            <MenuIcon icon={faBars} onClick={onMenuClick}/>
            <AvatarInfo>
                <Username>{userInfo.username}</Username>
                {
                    userInfo.avatarUrl
                        ? (<Avatar avatarUrl={userInfo.avatarUrl} />)
                        : (<AnonymousAvatar />)
                }
            </AvatarInfo>
        </HeaderContent>
    );
}
