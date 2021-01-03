import reducer, { INITIAL_STATE } from '../../../store/ducks/users/index';

import * as userActions from '../../../store/ducks/users/actions';

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

describe('Theme reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual(INITIAL_STATE);
  });

  it('LOAD_REQUEST', () => {
    const state = reducer(INITIAL_STATE, userActions.loadRequest('vuejs'));

    expect(state.loading).toStrictEqual(true);
  });

  it('LOAD_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, userActions.loadSuccess(user));

    expect(state.data.login).toStrictEqual('vuejs');
  });

  it('LOAD_FAILURE', () => {
    const state = reducer(INITIAL_STATE, userActions.loadFailure());

    expect(state.error).toStrictEqual(true);
  });
});
