import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import Routes from './routes';
import store from './store';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
