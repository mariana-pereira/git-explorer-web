import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { router } from './routes';
import { store } from './store';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
import usePersistedState from './utils/usePersistedState';

export function App() {
	const [theme, setTheme] = usePersistedState('theme', light);

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	};

	return (
		<ThemeProvider theme={theme}>
			<ReduxProvider store={store}>
				<Header toggleTheme={toggleTheme} />
				<RouterProvider router={router} />
				<GlobalStyle />
			</ReduxProvider>
		</ThemeProvider>
	);
}
