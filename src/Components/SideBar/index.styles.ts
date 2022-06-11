import styled, {css} from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";
import {SharedStyles} from "../../SharedStyles";
import {ReactComponent as Cube} from "../../Assets/icons/cube-svgrepo-com.svg";
import {ReactComponent as Cloud} from "../../Assets/icons/cloud-svgrepo-com.svg";
import {ReactComponent as Laptop} from "../../Assets/icons/laptop-svgrepo-com.svg";
import {ReactComponent as Cat} from "../../Assets/icons/domestic-cat-shape-svgrepo-com.svg";
import {ReactComponent as Monkey} from "../../Assets/icons/monkey-mammal-face-outline-front-svgrepo-com.svg";
import {ReactComponent as Book} from "../../Assets/icons/instruction-manual-manual-instructions-svgrepo-com.svg";

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
    
    text-transform: uppercase;
    
    :hover {
        border-color: ${Theme.lightForeGroundColor};
        cursor: pointer;
    }
`;

const iconCss = css`
    width: 32px;
    height: 32px;
    
    & path {
        fill: ${Theme.lightForeGroundColor} !important;
    }
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
