import { createBrowserRouter } from 'react-router-dom';

import { Main } from './pages/main';
import { Repository } from './pages/repository';

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