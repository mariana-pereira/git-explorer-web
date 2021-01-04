import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';

import api from '../../../services/api';

import * as repositoriesActions from '../../../store/ducks/repositories/actions';
import { load } from '../../../store/ducks/repositories/sagas';

const apiMock = new MockAdapter(api);

const repository = {
  id: 1,
  name: '',
  full_name: '',
  language: '',
  description: '',
  html_url: '',
  stargazers_count: 1,
  forks_count: 1,
  open_issues_count: 1,
  watchers_count: 1,
};

describe('Auth saga', () => {
  it('should be able to fetch repositories', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('users/vuejs/repos').reply(200, [repository]);

    await runSaga({ dispatch }, load, { type: '@repositories/LOAD_REQUEST', payload: 'vuejs' }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(repositoriesActions.loadSuccess([repository]));
  });

  it('should fail when api returns error', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('users/vuejs/repos').reply(500);

    await runSaga({ dispatch }, load, { type: '@repositories/LOAD_REQUEST', payload: 'vuejs' }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(repositoriesActions.loadFailure());
  });
});
