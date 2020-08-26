import update from 'immutability-helper';
import {
  GET_ACCOUNTS_START,
  GET_ACCOUNTS_ERROR,
  GET_ACCOUNTS,
  REFRESH_ACCOUNTS_START,
  REFRESH_ACCOUNTS_ERROR,
  REFRESH_ACCOUNTS,
} from 'actions/accounts/types';

const initialState = {
  accounts: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNTS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_ACCOUNTS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case GET_ACCOUNTS_ERROR:
    case REFRESH_ACCOUNTS_ERROR: {
      return initialState;
    }

    case REFRESH_ACCOUNTS: {
      return update(state, {
        isRefreshing: { $set: false },
        accounts: { $set: payload.accounts },
        count: { $set: payload.count },
      });
    }

    case GET_ACCOUNTS: {
      const accounts = state.accounts;
      return update(state, {
        isLoading: { $set: false },
        accounts: { $set: accounts.concat(payload.accounts) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
