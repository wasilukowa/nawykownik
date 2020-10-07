import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { HashRouter, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFonts from './fonts/fonts';

import Navigation from './components/Navigation';
import Home from './components/Home';
import AddNew from './components/AddNew';
import Archive from './components/Archive';
import Settings from './components/Settings';

import TasksArrayContextProvider from './context/TasksArrayContext';
import ArchiveTasksArrayContextProvider from './context/ArchiveTasksContext';


const WrapperStyled = styled.div`
  height: 100vh;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);;
  color: black;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-shrink: 0;
  padding: 2em;

  @media (min-width: 320px) {
    padding: 20px;
  }
`;

const WrapperInsideStyled = styled.div`
  background-color: white;
  min-height: 500px;
  width: 100vh;
  max-width: 900px;
  min-width: 260px;
  border-radius: 10px;
  box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07);
  padding: 20px;

  @media (max-width: 320px) {
    
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ArchiveTasksArrayContextProvider>
        <TasksArrayContextProvider>
          <WrapperStyled>
            <GlobalFonts />
            <GlobalStyle />
            <HashRouter>
              <WrapperInsideStyled>
                <Navigation />
                <Route exact path='/' component={Home} />
                <Route exact path='/dodajnowy' component={AddNew} />
                <Route exact path='/archiwum' component={Archive} />
                <Route exact path='/ustawienia' component={Settings} />
              </WrapperInsideStyled>
            </HashRouter>
          </WrapperStyled>
        </TasksArrayContextProvider>
      </ArchiveTasksArrayContextProvider>
    </ThemeProvider>
  );
}

export default App;
