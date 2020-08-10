import { combineReducers } from 'redux';

import user from './users';
import repositories from './repositories';

export default combineReducers({
  user,
  repositories,
});
