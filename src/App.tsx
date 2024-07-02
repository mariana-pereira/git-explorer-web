import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { store } from './store';
import GlobalStyle from './styles/global';

export function App() {

	return (
		<ReduxProvider store={store}>
			<RouterProvider router={router} />
			<GlobalStyle />
		</ReduxProvider>
	);
}
