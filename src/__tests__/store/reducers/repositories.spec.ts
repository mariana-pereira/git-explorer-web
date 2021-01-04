import reducer, { INITIAL_STATE } from '../../../store/ducks/repositories/index';

import * as repositoriesActions from '../../../store/ducks/repositories/actions';

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
  pushed_at: new Date(),
};

describe('Repositories reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, repositoriesActions.loadRequest('vuejs'));

    expect(state.loading).toStrictEqual(true);
  });

  it('LOAD_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, repositoriesActions.loadSuccess([repository]));

    expect(state.data).toBeTruthy();
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, repositoriesActions.loadFailure());

    expect(state.error).toStrictEqual(true);
  });
});
