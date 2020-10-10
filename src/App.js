import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { WrapperMain, WrapperInside } from './styles/WrapersStyle';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFonts from './fonts/fonts';

import Navigation from './components/Navigation';
import Home from './components/Home';
import AddNew from './components/AddNew';
import Archive from './components/Archive';

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <WrapperMain>
        <GlobalFonts />
        <GlobalStyle />
        <HashRouter>
          <WrapperInside>
            <Navigation />
            <Route exact path='/' component={Home} />
            <Route exact path='/dodajnowy' component={AddNew} />
            <Route exact path='/archiwum' component={Archive} />
          </WrapperInside>
        </HashRouter>
        <button onClick={themeToggler}>
          {theme === 'light' ? 'Ciemna kolorystyka' : 'Jasna kolorystyka'}
        </button>
      </WrapperMain>
    </ThemeProvider>
  );
}

export default App;
