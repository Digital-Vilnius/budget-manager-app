import update from 'immutability-helper';
import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES,
  ADD_CATEGORY_START,
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY,
  REFRESH_CATEGORIES_ERROR,
  REFRESH_CATEGORIES_START,
  REFRESH_CATEGORIES,
  EDIT_CATEGORY_START,
  GET_CATEGORY_START,
  GET_CATEGORY_ERROR,
  EDIT_CATEGORY_ERROR,
  EDIT_CATEGORY,
  GET_CATEGORY,
} from 'actions/categories/types';

const initialState = {
  categories: [],
  category: null,
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_CATEGORY_START:
    case GET_CATEGORY_START:
    case ADD_CATEGORY_START:
    case GET_CATEGORIES_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_CATEGORIES_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case REFRESH_CATEGORIES: {
      return update(state, {
        isRefreshing: { $set: false },
        categories: { $set: payload.categories },
        count: { $set: payload.count },
      });
    }

    case GET_CATEGORY_ERROR:
    case EDIT_CATEGORY_ERROR:
    case REFRESH_CATEGORIES_ERROR:
    case ADD_CATEGORY_ERROR:
    case GET_CATEGORIES_ERROR: {
      return initialState;
    }

    case EDIT_CATEGORY:
    case ADD_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case GET_CATEGORY: {
      return update(state, {
        isLoading: { $set: false },
        category: { $set: payload.category },
      });
    }

    case GET_CATEGORIES: {
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
