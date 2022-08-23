import styled, {css} from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {SharedStyles} from "../../SharedStyles";

export const commandVisibleScreenWidth = 579;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    
    width: 190px;
    min-width: 190px;
    max-width: 190px;

    @media(max-width: ${commandVisibleScreenWidth}px) {
        width: 24px;
        min-width: 24px;
        max-width: 24px;
    }
    
    @media(max-width: 400px) {
        display: none;
    }
`;

const commandTextCss = css`
    color: ${Theme.lightForegroundColor};
    font-size: 18px;
    line-height: 20px;
`;

export const ShellSign = styled.div`
    ${commandTextCss}
`;

export const CommandWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
`;

export const Command = styled.div`
    ${commandTextCss}
    white-space: pre-wrap;
    
    @media(max-width: ${commandVisibleScreenWidth}px) {
        display: none;
    }
`;

export const Underscore = styled.div`
    ${commandTextCss}
    ${SharedStyles.pulsatingText};
`;
