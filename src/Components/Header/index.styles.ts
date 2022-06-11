import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 72px;
    
    padding: 0 64px 0 18px;
    
    background-color: ${Theme.darkBackground};
`;

export const SidebarIcon = styled(FontAwesomeIcon)`
    width: 36px;
    height: 36px;
    
    & path {
        fill: ${Theme.lightForeGroundColor} !important;
        color: ${Theme.lightForeGroundColor} !important;
    }
    
    :hover {
        cursor: pointer;
    }
`;
