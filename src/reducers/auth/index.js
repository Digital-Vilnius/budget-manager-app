import update from 'immutability-helper';
import { AuthTypes } from 'types';

const initialState = {
  user: null,
  isLoading: false,
  isLogged: false,
  token: null,
  refreshToken: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AuthTypes.GET_LOGGED_USER_START:
    case AuthTypes.UPDATE_LOGGED_USER_START:
    case AuthTypes.REGISTER_START:
    case AuthTypes.LOGIN_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AuthTypes.LOGOUT:
    case AuthTypes.UPDATE_LOGGED_USER_ERROR:
    case AuthTypes.GET_LOGGED_USER_ERROR:
    case AuthTypes.LOGIN_ERROR:
    case AuthTypes.REGISTER_ERROR: {
      return initialState;
    }

    case AuthTypes.GET_LOGGED_USER:
    case AuthTypes.LOGIN: {
      return update(state, {
        isLoading: { $set: false },
        isLogged: { $set: true },
        user: { $set: payload.user },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
      });
    }

    case AuthTypes.UPDATE_LOGGED_USER:
    case AuthTypes.REGISTER: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    default:
      return state;
  }
};
