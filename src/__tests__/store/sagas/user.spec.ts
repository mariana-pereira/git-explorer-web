import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../services/api';

import * as userActions from '../../../store/ducks/users/actions';
import { load } from '../../../store/ducks/users/sagas';

const apiMock = new MockAdapter(api);

const user = {
  id: 1,
  login: 'vuejs',
  name: '',
  avatar_url: '',
  html_url: '',
  bio: '',
  followers: 1,
  following: 1,
  public_repos: 1,
};

const action = {
  type: '@users/LOAD_REQUEST',
  payload: 'vuejs',
};

describe('Auth saga', () => {
  it('should be able to fetch user', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`users/${action.payload}`).reply(200, user);

    await runSaga({ dispatch }, load, action).toPromise();

    expect(dispatch).toHaveBeenCalledWith(userActions.loadSuccess(user));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet(`users/${action.payload}`).reply(500);

    await runSaga({ dispatch }, load, action).toPromise();

    expect(dispatch).toHaveBeenCalledWith(userActions.loadFailure());
  });
});
