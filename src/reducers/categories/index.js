import update from 'immutability-helper';
import { AccountTypes, AuthTypes, CategoriesTypes } from 'types';

const initialState = {
  categories: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CategoriesTypes.GET_CATEGORIES_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case CategoriesTypes.REFRESH_CATEGORIES_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case CategoriesTypes.REFRESH_CATEGORIES: {
      return update(state, {
        isRefreshing: { $set: false },
        categories: { $set: payload.categories },
        count: { $set: payload.count },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case CategoriesTypes.REFRESH_CATEGORIES_ERROR:
    case CategoriesTypes.GET_CATEGORIES_ERROR: {
      return initialState;
    }

    case CategoriesTypes.GET_CATEGORIES: {
      const categories = state.categories;
      return update(state, {
        isLoading: { $set: false },
        categories: { $set: categories.concat(payload.categories) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
