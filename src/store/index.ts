import {
  createStore, applyMiddleware, Store, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './ducks/repositories/types';
import { UserState } from './ducks/users/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  repositories: RepositoriesState,
  user: UserState
}

const sagamiddleware = createSagaMiddleware();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeEhancers(applyMiddleware(sagamiddleware)),
);

sagamiddleware.run(rootSaga);

export default store;
