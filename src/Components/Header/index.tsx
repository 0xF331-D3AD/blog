import {
    AnonymousAvatar,
    Avatar,
    AvatarInfo,
    HeaderContent,
    LogoAndAvatarHolder,
    MenuIcon,
    Username
} from "./index.styles";
import {UserAvatarInfo} from "../../Types/UserTypes";
import {Logo} from "../Logo";

type Props = {
    onMenuClick: () => void,
    userInfo?: UserAvatarInfo,
}

export const Header = ({
                           onMenuClick = () => {
                           },
                           userInfo = {
                               username: 'Anonymous Guest',
                           }
                       }: Props) => {
    return (
        <HeaderContent>
            {/* @ts-ignore */}
            <MenuIcon onClick={onMenuClick}/>
            <LogoAndAvatarHolder>
                <Logo/>
                <AvatarInfo>
                    <Username>{userInfo.username}</Username>
                    {
                        userInfo.avatarUrl
                            ? (<Avatar avatarUrl={userInfo.avatarUrl}/>)
                            : (<AnonymousAvatar/>)
                    }
                </AvatarInfo>
            </LogoAndAvatarHolder>
        </HeaderContent>
    );
}
