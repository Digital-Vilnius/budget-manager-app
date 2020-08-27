import update from 'immutability-helper';
import { AccountTypes, AuthTypes, CategoryTypes } from 'types';

const initialState = {
  category: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CategoryTypes.EDIT_CATEGORY_START:
    case CategoryTypes.GET_CATEGORY_START:
    case CategoryTypes.ADD_CATEGORY_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case CategoryTypes.GET_CATEGORY_ERROR:
    case CategoryTypes.EDIT_CATEGORY_ERROR:
    case CategoryTypes.ADD_CATEGORY_ERROR: {
      return initialState;
    }

    case CategoryTypes.EDIT_CATEGORY:
    case CategoryTypes.ADD_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case CategoryTypes.GET_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
        category: { $set: payload.category },
      });
    }

    default:
      return state;
  }
};
