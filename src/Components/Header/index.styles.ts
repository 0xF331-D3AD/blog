import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    height: 72px;
    min-height: 72px;
    
    padding: 0 64px 0 24px;
    
    background-color: ${Theme.darkBackground};
`;

export const SidebarIcon = styled(FontAwesomeIcon)`
    width: 32px;
    height: 32px;
    
    & path {
        fill: ${Theme.lightForeGroundColor} !important;
        color: ${Theme.lightForeGroundColor} !important;
    }
    
    :hover {
        cursor: pointer;
    }
`;
