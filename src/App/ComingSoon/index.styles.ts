// @ts-nocheck
import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {Media} from "../../SharedStyles/media";

export const ComingSoonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
`;

export const ComingSoonContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 0;
    min-height: 0;
    gap: 32px;
    
    width: 360px;
    
    ${Media.tablet`
        width: 240px;
    `}
`;

export const ComingSoonText = styled.div`
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
