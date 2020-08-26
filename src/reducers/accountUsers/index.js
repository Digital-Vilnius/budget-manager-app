import update from 'immutability-helper';
import {
  GET_ACCOUNT_USERS_START,
  GET_ACCOUNT_USERS_ERROR,
  GET_ACCOUNT_USERS,
  REFRESH_ACCOUNT_USERS_START,
  REFRESH_ACCOUNT_USERS_ERROR,
  REFRESH_ACCOUNT_USERS,
} from 'actions/accountUsers/types';

const initialState = {
  accountUsers: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNT_USERS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_ACCOUNT_USERS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case REFRESH_ACCOUNT_USERS: {
      return update(state, {
        isRefreshing: { $set: false },
        accountUsers: { $set: payload.accountUsers },
        count: { $set: payload.count },
      });
    }

    case GET_ACCOUNT_USERS_ERROR:
    case REFRESH_ACCOUNT_USERS_ERROR: {
      return initialState;
    }

    case GET_ACCOUNT_USERS: {
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
