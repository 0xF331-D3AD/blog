import styled from "styled-components";
import {Media} from "../../SharedStyles/media";

export const ProgressOverlayContent = styled.div`
    display: flex;
    
    width: 160px;
    max-width: 160px;
    min-width: 160px;
    
    height: 180px;
    max-height: 180px;
    min-height: 180px;
    
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    
    ${Media.phoneLg`
        width: 60px;
        max-width: 60px;
        min-width: 60px;
        
        height: 70px;
        max-height: 70px;
        min-height: 70px;
    `}
    
    ${Media.tablet`
        width: 90px;
        max-width: 90px;
        min-width: 90px;
        
        height: 105px;
        max-height: 105px;
        min-height: 105px;
    `}
`;
