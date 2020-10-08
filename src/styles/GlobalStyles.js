import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        padding: 0;
        margin: 0;
        font-family: 'Playfair Regular';
        color: ${({ theme }) => theme.text};
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
        color: ${({ theme }) => theme.text};
    }
`;

export default GlobalStyle;