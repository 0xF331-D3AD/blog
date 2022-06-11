import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";

export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
    
    background-color: ${Theme.darkBackground};
    
    ${Media.desktop`
        display: ${({ isOpened }: { isOpened: boolean }) => isOpened ? 'flex' : 'none'};
    `}
`;
