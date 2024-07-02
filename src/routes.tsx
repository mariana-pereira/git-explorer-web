import { createBrowserRouter } from 'react-router-dom';

import { Main } from './pages/Main';
import { Repository } from './pages/Repository';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/repository',
		element: <Repository />,
	},
]);