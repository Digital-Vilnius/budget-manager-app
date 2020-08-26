import update from 'immutability-helper';
import { AuthTypes } from 'types';

const initialState = {
  id: null,
  isLoading: false,
  isLogged: false,
  token: null,
  refreshToken: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AuthTypes.GET_LOGGED_USER_START:
    case AuthTypes.REGISTER_START:
    case AuthTypes.REGISTER_FAMILY_START:
    case AuthTypes.LOGIN_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AuthTypes.GET_LOGGED_USER_ERROR:
    case AuthTypes.REGISTER_FAMILY_ERROR:
    case AuthTypes.LOGIN_ERROR:
    case AuthTypes.REGISTER_ERROR: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case AuthTypes.LOGIN: {
      return update(state, {
        isLoading: { $set: false },
        isLogged: { $set: true },
        id: { $set: payload.id },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
      });
    }

    case AuthTypes.REGISTER_FAMILY:
    case AuthTypes.REGISTER: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case AuthTypes.GET_LOGGED_USER: {
      return update(state, {
        isLoading: { $set: false },
        id: { $set: payload.id },
        token: { $set: payload.token },
        refreshToken: { $set: payload.refreshToken },
      });
    }

    case AuthTypes.LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};
