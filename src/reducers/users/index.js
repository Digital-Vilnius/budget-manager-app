import update from 'immutability-helper';
import {
  GET_USERS_START,
  GET_USERS_ERROR,
  GET_USERS,
  REFRESH_USERS_ERROR,
  REFRESH_USERS_START,
  REFRESH_USERS,
} from 'actions/users/types';

const initialState = {
  users: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_USERS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case REFRESH_USERS: {
      return update(state, {
        isRefreshing: { $set: false },
        users: { $set: payload.users },
        count: { $set: payload.count },
      });
    }

    case REFRESH_USERS_ERROR:
    case GET_USERS_ERROR: {
      return initialState;
    }

    case GET_USERS: {
      const users = state.users;
      return update(state, {
        isLoading: { $set: false },
        users: { $set: users.concat(payload.users) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
