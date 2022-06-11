import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Media} from "../../SharedStyles/media";

export const headerHeight = 72;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    height: ${headerHeight}px;
    min-height: ${headerHeight}px;
    
    padding: 0 64px 0 32px;
    
    background-color: ${Theme.darkBackground};
`;

export const MenuIcon = styled(FontAwesomeIcon)`
    display: none;
    width: 32px;
    height: 32px;
    
    & path {
        fill: ${Theme.lightForeGroundColor} !important;
        color: ${Theme.lightForeGroundColor} !important;
    }
    
    :hover {
        cursor: pointer;
    }
    
    ${Media.desktop`
        display: block;
    `}
`;
