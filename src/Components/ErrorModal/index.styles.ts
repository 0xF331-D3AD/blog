import styled from "styled-components";
import {Theme} from "../../SharedStyles/theme";
import {ReactComponent as ErrorSign} from "../../Assets/icons/warning-svgrepo-com.svg";

export const ErrorMessageBox = styled.div`
    display: flex;
    
    width: 300px;
    max-width: 300px;
    min-width: 300px;
    
    height: 250px;
    max-height: 200px;
    min-height: 200px;
    
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    
    
    border-radius: 15px;
    border: 2px solid ${Theme.veryDarkForegroundColor};
    
    background-color: ${Theme.darkBackground};
`;

export const ErrorContentWrapper = styled.div`
    display: flex;
    align-items: center;
    // flex-direction: column;
    // gap: 20px;
    
    min-width: 0;
    width: 100%;
    max-width: 100%;
    
    // padding: 16px 24px;
`;

export const ErrorScrollContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    
    min-width: 0;
    width: calc(100% - 48px);
    max-width: calc(100% - 48px);
    
    padding: 16px 24px;
`;

export const ErrorIcon = styled(ErrorSign)`
    min-width: 48px !important;
    max-width: 48px !important;
    min-height: 48px !important;
    max-height: 48px !important;
    
    & path {
        fill: ${Theme.lightForegroundColor} !important;
    }
`;

export const ModalMessage = styled.div`
    width: 100%;
    
    text-align: center;
    color: ${Theme.lightForegroundColor};
    
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    
    max-height: 100px;
`;
