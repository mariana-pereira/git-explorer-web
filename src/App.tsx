import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';
import { store } from './store';

export function App() {

	return (
		<ReduxProvider store={store}>
			<RouterProvider router={router} />
		</ReduxProvider>
	);
}
