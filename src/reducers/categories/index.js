import update from 'immutability-helper';
import { AccountTypes, AuthTypes, CategoriesTypes } from 'types';

const initialState = {
  categories: [],
  category: null,
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CategoriesTypes.EDIT_CATEGORY_START:
    case CategoriesTypes.GET_CATEGORY_START:
    case CategoriesTypes.ADD_CATEGORY_START:
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
    case CategoriesTypes.GET_CATEGORY_ERROR:
    case CategoriesTypes.EDIT_CATEGORY_ERROR:
    case CategoriesTypes.REFRESH_CATEGORIES_ERROR:
    case CategoriesTypes.ADD_CATEGORY_ERROR:
    case CategoriesTypes.GET_CATEGORIES_ERROR: {
      return initialState;
    }

    case CategoriesTypes.EDIT_CATEGORY:
    case CategoriesTypes.ADD_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case CategoriesTypes.GET_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
        category: { $set: payload.category },
      });
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
