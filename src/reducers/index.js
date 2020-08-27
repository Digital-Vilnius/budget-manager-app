import { combineReducers } from 'redux';
import transactions from './transactions';
import transaction from './transaction';
import categories from './categories';
import auth from './auth';
import accounts from './accounts';
import account from './account';
import accountUsers from './accountUsers';
import category from './category';
import tags from './tags';
import tag from './tag';

const rootReducer = combineReducers({
  auth,
  transactions,
  transaction,
  categories,
  accounts,
  accountUsers,
  tags,
  tag,
  account,
  category,
});

export { rootReducer };
