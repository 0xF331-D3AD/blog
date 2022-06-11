import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";
import {SharedStyles} from "../../SharedStyles";

export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    height: 100%;
        
    background-color: ${Theme.darkBackground};
    
    ${SharedStyles.unselectableText};
    
    ${Media.desktop`
        display: ${({ isOpened }: { isOpened: boolean }) => isOpened ? 'flex' : 'none'};
    `}
`;

export const SideBarItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 16px;
    
    padding: 16px 32px;
    
    font-weight: bold;
    font-size: 20px;
    line-height: 22px;
  
    color: ${Theme.lightForeGroundColor};
    border: solid 2px transparent;
    border-radius: 8px;
    
    :hover {
        border-color: ${Theme.lightForeGroundColor};
        cursor: pointer;
    }
`;
