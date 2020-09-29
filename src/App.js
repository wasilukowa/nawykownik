import React from 'react';
import styled from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFonts from './fonts/fonts';
import { ThemeProvider } from 'styled-components';

import Home from './components/Home';

const WrapperStyled = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);;
  color: black;
  font-family: 'Playfair Black';
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const WrapperInsideStyled = styled.div`
  background-color: white;
  min-height: 500px;
  min-width: 900px;
  border-radius: 10px;
  box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
  padding: 10px;
`;



function App() {
  return (
    <ThemeProvider theme={theme}>
      <WrapperStyled>
        <GlobalFonts />
        <GlobalStyle />
        <WrapperInsideStyled>
          <Home />
        </WrapperInsideStyled>
      </WrapperStyled>
    </ThemeProvider>
  );
}

export default App;
