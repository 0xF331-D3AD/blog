import {css, keyframes} from "styled-components";

const unselectableText = css`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const ellipsisOverflow = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const selectableText = css` 
  -webkit-touch-callout: text; /* iOS Safari */
  -webkit-user-select: text; /* Safari */
  -khtml-user-select: text; /* Konqueror HTML */
  -moz-user-select: text; /* Old versions of Firefox */
  -ms-user-select: text; /* Internet Explorer/Edge */
  user-select: text; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

const pulsatingTextKeyframes = keyframes`
    0% { 
        opacity: 0.1;
    }
    10% {
        opacity: 0.2;
    }
    20% { 
        opacity: 0.4;
    }
    30% { 
        opacity: 0.6;
    }
    40% {
        opacity: 0.8;
    }
    50% { 
        opacity: 1.0;
    }
    60% { 
        opacity: 0.8;
    }
    70% {
        opacity: 0.6;
    }
    80% { 
        opacity: 0.4;
    }
    90% { 
        opacity: 0.2;
    }
    100% {
        opacity: 0.1;
    }
`;

const pulsatingText = css`
    -webkit-animation: pulsate 1.5s ease-out;
    -webkit-animation-iteration-count: infinite; 
    opacity: 0.1;
    
    animation-name: ${pulsatingTextKeyframes};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`;

export const SharedStyles = {
    unselectableText,
    ellipsisOverflow,
    selectableText,
    pulsatingText,
};
