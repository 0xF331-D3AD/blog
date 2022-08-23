// @ts-nocheck
import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";
import {ReactComponent as Virus} from "../../Assets/icons/virus-svgrepo-com.svg";
import {SharedStyles} from "../../SharedStyles";

export const NotFoundWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
`;

export const NotFoundContent = styled.div`
    display: flex;
    min-width: 0;
    min-height: 0;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    
    width: 360px;
    
    ${Media.tablet`
        width: 240px;
    `}
`;

export const NotFoundText = styled.div`
    text-align: center;
    
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    
    color: ${Theme.lightForegroundColor};
    
    ${Media.tablet`
        font-size: 16px;
        line-height: 18px;
    `}
    
    ${Media.phoneLg`
        font-size: 14px;
        line-height: 16px;
    `}
`;

export const NotFoundIcon = styled(Virus)`
    width: 160px;
    height: 160px;
    
    & path {
        fill: ${Theme.lightForegroundColor};
    }

    ${SharedStyles.halfRotatingIcon};
    
    ${Media.tablet`
        width: 80px;
        height: 80px;
    `}
    
    ${Media.phoneLg`
        width: 40px;
        height: 40px;
    `}
`;
