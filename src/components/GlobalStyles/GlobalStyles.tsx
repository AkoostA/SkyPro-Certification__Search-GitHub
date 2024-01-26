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
`;

export default GlobalStyles;
