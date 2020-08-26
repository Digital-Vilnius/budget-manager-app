import update from 'immutability-helper';
import { AccountsTypes, AuthTypes } from 'types';

const initialState = {
  accounts: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AccountsTypes.GET_ACCOUNTS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountsTypes.REFRESH_ACCOUNTS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case AuthTypes.LOGOUT:
    case AccountsTypes.GET_ACCOUNTS_ERROR:
    case AccountsTypes.REFRESH_ACCOUNTS_ERROR: {
      return initialState;
    }

    case AccountsTypes.REFRESH_ACCOUNTS: {
      return update(state, {
        isRefreshing: { $set: false },
        accounts: { $set: payload.accounts },
        count: { $set: payload.count },
      });
    }

    case AccountsTypes.GET_ACCOUNTS: {
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
