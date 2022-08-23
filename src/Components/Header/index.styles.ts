import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {ReactComponent as Menu} from "../../Assets/icons/menu-svgrepo-com.svg";
import {Media} from "../../SharedStyles/media";
import {
    ReactComponent as Anonymous
} from "../../Assets/icons/anonymous-cyber-crime-criminal-hack-hacker-svgrepo-com.svg";
import {SharedStyles} from "../../SharedStyles";

export const headerHeight = 72;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    
    flex: 1;
    height: ${headerHeight - 2}px;
    min-height: ${headerHeight - 2}px;
    
    padding: 0 32px;
    
    background-color: ${Theme.darkBackground};
    border-bottom: 2px solid ${Theme.veryDarkForegroundColor};
    
    ${Media.phoneLg`
        padding: 0 16px;
        gap: 16px;
    `}
    
    ${SharedStyles.unselectableText}
`;

export const MenuIcon = styled(Menu)`
    display: none;
    width: 32px;
    height: 32px;
    
    & path, g {
        fill: ${Theme.lightForegroundColor} !important;
        color: ${Theme.lightForegroundColor} !important;
    }
    
    :hover {
        cursor: pointer;
    }
    
    ${Media.desktop`
        display: block;
    `}
    
    ${Media.phoneLg`
        width: 24px;
        height: 24px;
    `}
`;

export const AnonymousAvatar = styled(Anonymous)`
    width: 32px;
    height: 32px;
    padding: 4px;
    
    & path {
        fill: ${Theme.lightForegroundColor} !important;
    }
    
    border: 2px solid ${Theme.lightForegroundColor};
    border-radius: 50%;
    
    ${Media.phoneLg`
        width: 28px;
        height: 28px;
    `}
`;

export const Avatar = styled.div`
    width: 44px;
    height: 44px;
    
    border-radius: 50%;
    
    background: url(${({avatarUrl}: { avatarUrl: string }) => avatarUrl});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

export const Username = styled.div`
    color: ${Theme.lightForegroundColor};
    text-decoration: underline;
    font-size: 16px;
    line-height: 18px;
    max-width: 200px;
    
    ${SharedStyles.ellipsisOverflow}
`;

export const LogoAndAvatarHolder = styled.div`
    margin-left: auto;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    
    ${Media.tabletLg`
        width: 90%;
    `}
    
    ${Media.tablet`
        width: 100%;
    `}
`;

export const AvatarInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    
    :hover {
        cursor: pointer;
    }
    
    ${Media.phoneLg`
        margin-left: auto;
    `}
`;
