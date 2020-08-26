import update from 'immutability-helper';
import { AccountTypes, AccountUsersTypes, AuthTypes } from 'types';

const initialState = {
  accountUsers: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AccountUsersTypes.GET_ACCOUNT_USERS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountUsersTypes.REFRESH_ACCOUNT_USERS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case AccountUsersTypes.REFRESH_ACCOUNT_USERS: {
      return update(state, {
        isRefreshing: { $set: false },
        accountUsers: { $set: payload.accountUsers },
        count: { $set: payload.count },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case AccountUsersTypes.GET_ACCOUNT_USERS_ERROR:
    case AccountUsersTypes.REFRESH_ACCOUNT_USERS_ERROR: {
      return initialState;
    }

    case AccountUsersTypes.GET_ACCOUNT_USERS: {
      const users = state.users;
      return update(state, {
        isLoading: { $set: false },
        accountUsers: { $set: users.concat(payload.accountUsers) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
