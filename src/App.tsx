import React from 'react';
import { Provider } from 'react-redux';

import RepositoryList from './components/Repository';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
