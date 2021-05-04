import { combineReducers } from 'redux';
import transactions from 'core/reducers/transactions';
import transaction from 'core/reducers/transaction';
import categories from 'core/reducers/categories';
import auth from 'core/reducers/auth';
import accounts from 'core/reducers/accounts';
import account from 'core/reducers/account';
import accountUsers from 'core/reducers/accountUsers';
import category from 'core/reducers/category';
import tags from 'core/reducers/tags';
import tag from 'core/reducers/tag';
import invitation from 'core/reducers/invitation';
import invitations from 'core/reducers/invitations';

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
