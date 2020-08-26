import update from 'immutability-helper';
import { AccountTypes, AuthTypes, UserTypes } from 'types';
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
    case UserTypes.GET_USER_START:
    case UserTypes.UPDATE_LOCALE_START:
    case UserTypes.UPDATE_USER_DETAILS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case UserTypes.UPDATE_LOCALE_ERROR:
    case UserTypes.GET_USER_ERROR:
    case UserTypes.UPDATE_USER_DETAILS_ERROR: {
      return initialState;
    }

    case UserTypes.GET_USER: {
      return update(state, {
        isLoading: { $set: false },
        id: { $set: payload.id },
        locale: { $set: payload.locale },
        email: { $set: payload.email },
        fullName: { $set: payload.fullName },
      });
    }

    case UserTypes.UPDATE_USER_DETAILS:
    case UserTypes.UPDATE_LOCALE: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    default:
      return state;
  }
};
