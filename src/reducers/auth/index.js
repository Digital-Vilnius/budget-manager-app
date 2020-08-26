import update from 'immutability-helper';
import {
  GET_LOGGED_USER,
  GET_LOGGED_USER_ERROR,
  GET_LOGGED_USER_START,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_START,
  LOGOUT,
  REGISTER_FAMILY,
  REGISTER_FAMILY_ERROR,
  REGISTER_FAMILY_START,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_START,
} from 'actions/auth/types';

const initialState = {
  id: null,
  isLoading: false,
  isLogged: false,
  token: null,
  refreshToken: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGGED_USER_START:
    case REGISTER_START:
    case REGISTER_FAMILY_START:
    case LOGIN_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case GET_LOGGED_USER_ERROR:
    case REGISTER_FAMILY_ERROR:
    case LOGIN_ERROR:
    case REGISTER_ERROR: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case LOGIN: {
      return update(state, {
        isLoading: { $set: false },
        isLogged: { $set: true },
        id: { $set: payload.id },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
      });
    }

    case REGISTER_FAMILY:
    case REGISTER: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case GET_LOGGED_USER: {
      return update(state, {
        isLoading: { $set: false },
        id: { $set: payload.id },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
      });
    }

    case LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};
