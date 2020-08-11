/**
 * Action types
 */

export enum UserTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface LoadRequestAction {
  type: typeof UserTypes.LOAD_REQUEST
  payload: string;
}

export interface User {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
}

/**
 * State types
 */

export interface UserState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: boolean;
}
