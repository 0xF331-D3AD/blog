import styled from "styled-components";
import Background from "../Assets/background.jpg";

export const SiteContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;
`;

export const SidebarAndContentWrapper = styled.div`
    display: flex;
    height: 100%;
    
    background-color: green;
`;

export const ContentPane = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;
    
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`
