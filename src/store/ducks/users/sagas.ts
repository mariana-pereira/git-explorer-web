import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import api from '../../../services/api';

import { UserTypes, LoadRequestAction } from './types';
import { loadSuccess, loadFailure } from './actions';

export function* load(action: LoadRequestAction) {
  try {
    const response = yield call(api.get, `users/${action.payload}`);

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}

export default all([
  takeLatest(UserTypes.LOAD_REQUEST, load),
]);
