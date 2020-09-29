import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import styled from 'styled-components';
import GlobalFonts from './fonts/fonts';

import Home from './components/Home';

const WrapperStyled = styled.div`
  height: 100vh;
  background-color: grey;
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
`;



function App() {
  return (
    <WrapperStyled>
      <GlobalFonts />
      <GlobalStyle />
      <WrapperInsideStyled>
        <Home />
      </WrapperInsideStyled>
    </WrapperStyled>
  );
}

export default App;
