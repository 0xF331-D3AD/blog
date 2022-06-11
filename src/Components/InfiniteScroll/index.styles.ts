import styled from 'styled-components';
import {Theme} from "../../SharedStyles/theme";

// @ts-ignore
export const InfiniteScrollWrapper = styled.div`
    display: flex;
    flex-direction: ${({ horizontal }: { horizontal: boolean }) => (horizontal ? 'row' : 'column')};
    gap: ${({gap} : {gap?: number}) => (gap || 0)}px;
    
    width: 100%;
    height: 100;
    overflow-x: ${({ horizontal }: { horizontal: boolean }) => (horizontal ? 'scroll' : 'hidden')};
    overflow-y: ${({ horizontal }: { horizontal: boolean }) => (horizontal ? 'hidden' : 'scroll')};
      
    background-color: inherit;
      
    scrollbar-color: ${Theme.darkGrey} transparent;
    scrollbar-width: 1em;
       
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }
       
    ::-webkit-scrollbar-thumb {
      outline: 1px solid slategrey;
    }
`;
