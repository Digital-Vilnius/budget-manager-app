import update from 'immutability-helper';
import {
  UPDATE_LOCALE_ERROR,
  UPDATE_LOCALE_START,
  UPDATE_USER_DETAILS_START,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_LOCALE,
  GET_USER,
  GET_USER_ERROR,
  GET_USER_START,
} from 'actions/user/types';
import { LOCALES } from 'constants';

const initialState = {
  id: null,
  fullName: null,
  email: false,
  isLoading: false,
  locale: LOCALES.EN,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_START:
    case UPDATE_LOCALE_START:
    case UPDATE_USER_DETAILS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case UPDATE_LOCALE_ERROR:
    case GET_USER_ERROR:
    case UPDATE_USER_DETAILS_ERROR: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case GET_USER: {
      return update(state, {
        isLoading: { $set: false },
        id: { $set: payload.id },
        locale: { $set: payload.locale },
        email: { $set: payload.email },
        fullName: { $set: payload.fullName },
      });
    }

    case UPDATE_USER_DETAILS:
    case UPDATE_LOCALE: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    default:
      return state;
  }
};
