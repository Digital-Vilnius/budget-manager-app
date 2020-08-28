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
import invitation from './invitation';
import invitations from './invitations';

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
  invitation,
  invitations,
});

export { rootReducer };
