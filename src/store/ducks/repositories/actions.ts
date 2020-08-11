import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (login: string) => action(RepositoriesTypes.LOAD_REQUEST, login);

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);
