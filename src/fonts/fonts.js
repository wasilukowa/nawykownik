import { createGlobalStyle } from 'styled-components';

import PlayfairRegWoff from './playfair-display-v21-latin-regular.woff';
import PlayfairRegWoff2 from './playfair-display-v21-latin-regular.woff2';

import Playfair600Woff from './playfair-display-v21-latin-600.woff';
import Playfair600Woff2 from './playfair-display-v21-latin-600.woff2';

import Playfair900Woff from './playfair-display-v21-latin-900.woff';
import Playfair900Woff2 from './playfair-display-v21-latin-900.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Playfair Regular';
        src: local('Playfair Regular'), local('Playfair Regular'),
        url(${PlayfairRegWoff2}) format('woff2'),
        url(${PlayfairRegWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face{
        font-family: 'Playfair Bold';
        src: local('Playfair Bold'), local('Playfair Bold'),
        url(${Playfair600Woff2}) format('woff2'),
        url(${Playfair600Woff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face{
        font-family: 'Playfair Black';
        src: local('Playfair Black'), local('Playfair Black'),
        url(${Playfair900Woff2}) format('woff2'),
        url(${Playfair900Woff}) format('woff');
        font-weight: 900;
        font-style: normal;
    }
`;