import { combineReducers } from 'redux';
import transactions from './transactions';
import categories from './categories';
import auth from './auth';
import accounts from './accounts';
import account from './account';
import accountUsers from './accountUsers';
import tags from './tags';
import user from './user';

const rootReducer = combineReducers({
  auth,
  transactions,
  categories,
  accounts,
  accountUsers,
  tags,
  user,
  account,
});

export { rootReducer };
