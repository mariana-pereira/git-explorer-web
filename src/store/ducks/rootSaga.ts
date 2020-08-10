import { all } from 'redux-saga/effects';

import user from './users/sagas';
import repositories from './repositories/sagas';

export default function* rootSaga() {
  return yield all([user, repositories]);
}
