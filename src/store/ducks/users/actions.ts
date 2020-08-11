import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loadRequest = (login: string) => action(UserTypes.LOAD_REQUEST, login);

export const loadSuccess = (data: User) => action(UserTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(UserTypes.LOAD_FAILURE);
