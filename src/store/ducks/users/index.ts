import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

const INITIAL_STATE: UserState = {
  data: {
    id: 0,
    login: '',
    name: '',
    avatar_url: '',
    html_url: '',
    bio: '',
    followers: 0,
    following: 0,
    public_repos: 0,
  },
  error: false,
  loading: false,
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true, data: action.payload.data };
    case UserTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case UserTypes.LOAD_FAILURE:
      return {
        ...state, loading: false, error: true, data: {},
      };
    default:
      return state;
  }
};

export default reducer;
