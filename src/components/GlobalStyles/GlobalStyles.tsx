import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #0d1117;
        padding: 20px 30px;
    }

    button, input {
        cursor: pointer;
        border: none;
    }

    button {
        background: #597bbe;
        border-radius: 5px;
        transition: all 0.5s; 
        font-size: 20px;

        &:hover {
        background: #235fd4;
        }

        &:disabled {
        background: #b2acac;
        }
    }
`;

export default GlobalStyles;
