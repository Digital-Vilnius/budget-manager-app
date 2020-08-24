import update from 'immutability-helper';
import {
  GET_ACCOUNTS_START,
  GET_ACCOUNTS_ERROR,
  GET_ACCOUNTS,
  SELECT_ACCOUNT,
} from 'actions/accounts/types';

const initialState = {
  accounts: [],
  selectedAccount: null,
  count: 0,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNTS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case GET_ACCOUNTS_ERROR: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case GET_ACCOUNTS: {
      return update(state, {
        isLoading: { $set: false },
        accounts: { $set: payload.accounts },
        count: { $set: payload.count },
        selectedAccount: { $set: payload.selectedAccount },
      });
    }

    case SELECT_ACCOUNT: {
      return update(state, {
        selectedAccount: { $set: payload.account },
      });
    }

    default:
      return state;
  }
};
