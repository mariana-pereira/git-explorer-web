/**
 * Action types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */

export interface LoadRequestAction {
  type: typeof RepositoriesTypes.LOAD_REQUEST;
  payload: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  pushed_at: Date;
}

/**
 * State types
 */

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
