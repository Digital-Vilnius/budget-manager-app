import { combineReducers } from 'redux';
import transactions from './transactions';
import categories from './categories';
import auth from './auth';
import accounts from './accounts';
import users from './users';
import tags from './tags';
import user from './user';

const rootReducer = combineReducers({
  auth,
  transactions,
  categories,
  accounts,
  users,
  tags,
  user,
});

export { rootReducer };
