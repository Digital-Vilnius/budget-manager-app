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
  REGISTER_INDIVIDUAL,
  REGISTER_INDIVIDUAL_ERROR,
  REGISTER_INDIVIDUAL_START,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_START,
  UPDATE_LOCALE_START,
  UPDATE_LOCALE_ERROR,
  UPDATE_LOCALE,
} from 'actions/auth/types';
import { LOCALES } from 'constants';

const initialState = {
  id: null,
  locale: LOCALES.EN,
  isLoading: false,
  isLogged: false,
  token: null,
  refreshToken: null,
  email: null,
  fullName: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_DETAILS_START:
    case UPDATE_LOCALE_START:
    case GET_LOGGED_USER_START:
    case REGISTER_INDIVIDUAL_START:
    case REGISTER_FAMILY_START:
    case LOGIN_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case UPDATE_LOCALE_ERROR:
    case UPDATE_USER_DETAILS_ERROR:
    case GET_LOGGED_USER_ERROR:
    case REGISTER_FAMILY_ERROR:
    case LOGIN_ERROR:
    case REGISTER_INDIVIDUAL_ERROR: {
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
        locale: { $set: payload.locale },
        refreshToken: { $set: payload.refreshToken },
        email: { $set: payload.email },
        fullName: { $set: payload.fullName },
      });
    }

    case UPDATE_USER_DETAILS:
    case UPDATE_LOCALE:
    case REGISTER_FAMILY:
    case REGISTER_INDIVIDUAL: {
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
