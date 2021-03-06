import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { saveArrayToLocalStorage, takeArrayFromLocalStorage } from './utilities/localStorageUsage';

import { ThemeProvider } from 'styled-components';
import { WrapperMain, WrapperInside } from './styles/WrapersStyle';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';
import GlobalFonts from './fonts/fonts';

import Navigation from './components/Navigation';
import Home from './components/Home';
import AddNew from './components/AddNew';
import Archive from './components/Archive';

import Legend from './components/Legend';

function App() {


  const [theme, setTheme] = useState(takeArrayFromLocalStorage('theme'));
  const [legendIsOn, setLegendIsOn] = useState(takeArrayFromLocalStorage('legendIsOn'));

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    theme === 'light' ? saveArrayToLocalStorage('theme', 'dark') : saveArrayToLocalStorage('theme', 'light');
  }

  const showLegend = () => {
    setLegendIsOn(true);
    saveArrayToLocalStorage('legendIsOn', true);
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
        <div className='button-container'>
          <button onClick={themeToggler}>
            {theme === 'light' ? 'Ciemna kolorystyka' : 'Jasna kolorystyka'}
          </button>
          <button onClick={showLegend}>
            Pokaż instrukcję obsługi
        </button>
        </div>
        {(legendIsOn === true) && <Legend close={setLegendIsOn} />}
      </WrapperMain>
    </ThemeProvider>
  );
}

export default App;
