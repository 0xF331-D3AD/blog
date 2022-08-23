import styled, {css} from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {SharedStyles} from "../../SharedStyles";
import {ReactComponent as Cube} from "../../Assets/icons/cube-svgrepo-com.svg";
import {ReactComponent as Cloud} from "../../Assets/icons/cloud-svgrepo-com.svg";
import {ReactComponent as Laptop} from "../../Assets/icons/laptop-svgrepo-com.svg";
import {ReactComponent as Cat} from "../../Assets/icons/domestic-cat-shape-svgrepo-com.svg";
import {ReactComponent as Monkey} from "../../Assets/icons/monkey-mammal-face-outline-front-svgrepo-com.svg";
import {ReactComponent as Book} from "../../Assets/icons/instruction-manual-manual-instructions-svgrepo-com.svg";
import {ReactComponent as Virus} from "../../Assets/icons/virus-svgrepo-com.svg";
import {headerHeight} from "../Header/index.styles";
import {devices, Media} from "../../SharedStyles/media";

export const sideBarSize = 300;

export const SideBarContent = styled.div`
    position: absolute;
    top: ${headerHeight};
    left: 0;
    
    display: ${({isOpened}: { isOpened: boolean }) => isOpened ? 'flex' : 'none'};
    flex-direction: column;
    
    width: ${sideBarSize - 2}px;
    min-width: ${sideBarSize - 2}px;
    max-width: ${sideBarSize - 2}px;
    height: 100%;
        
    background-color: ${Theme.darkBackground};
    border-right: 2px solid ${Theme.veryDarkForegroundColor};
    
    ${SharedStyles.unselectableText};
`;

export const SideBarItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    
    padding: 16px 32px;
    max-height: 68px;
    
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  
    color: ${Theme.lightForegroundColor};
    border: solid 2px ${({isSelected}: { isSelected: boolean }) => isSelected ? Theme.lightForegroundColor : 'transparent'};
    border-radius: 8px;
    
    text-transform: uppercase;
    
    :hover {
        border-color: ${Theme.mediumForegroundColor};
        background-color: ${Theme.mediumForegroundColor};
        cursor: pointer;
    }
    
    ${Media.phoneMd`
        padding: 12px 24px;
    `}
`;

const iconCss = css`
    width: 28px;
    height: 28px;
    
    & path {
        fill: ${Theme.lightForegroundColor} !important;
    }
    
    ${Media.phoneMd`
        width: 24px;
        height: 24px;
    `}
`;

export const ArticlesIconSVG = styled(Laptop)`
    ${iconCss}
`;

export const HTBIconSVG = styled(Cube)`
    ${iconCss}
`;

export const OTWIconSVG = styled(Cat)`
    ${iconCss}
`;

export const THMIconSVG = styled(Cloud)`
    ${iconCss}
`;

export const STSIconSVG = styled(Monkey)`
    ${iconCss}
`;

export const TutorialsIconSVG = styled(Book)`
    ${iconCss}
`;

export const SideBarBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    
    padding: 16px 32px;
    max-height: 60px;
    
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  
    color: ${Theme.lightForegroundColor};
    
    :hover {
        cursor: pointer;
    }
    
    @media(max-height: ${devices.phoneLg}px){
        display: none;
    }
`;

export const VirusIconSVG = styled(Virus)`
    ${iconCss}
    
    ${SharedStyles.halfRotatingIcon}
`;
