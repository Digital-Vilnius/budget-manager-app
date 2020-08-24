import update from 'immutability-helper';
import {
  GET_TAG,
  GET_TAG_ERROR,
  GET_TAG_START,
  GET_TAGS,
  GET_TAGS_ERROR,
  GET_TAGS_START,
  ADD_TAG,
  ADD_TAG_ERROR,
  ADD_TAG_START,
  REFRESH_TAGS,
  REFRESH_TAGS_ERROR,
  REFRESH_TAGS_START,
  EDIT_TAG,
  EDIT_TAG_ERROR,
  EDIT_TAG_START,
} from 'actions/tags/types';

const initialState = {
  tags: [],
  tag: null,
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_TAG_START:
    case GET_TAG_START:
    case ADD_TAG_START:
    case GET_TAGS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_TAGS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case REFRESH_TAGS: {
      return update(state, {
        isRefreshing: { $set: false },
        tags: { $set: payload.tags },
        count: { $set: payload.count },
      });
    }

    case GET_TAG_ERROR:
    case EDIT_TAG_ERROR:
    case REFRESH_TAGS_ERROR:
    case ADD_TAG_ERROR:
    case GET_TAGS_ERROR: {
      return initialState;
    }

    case EDIT_TAG:
    case ADD_TAG: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case GET_TAG: {
      return update(state, {
        isLoading: { $set: false },
        tag: { $set: payload.tag },
      });
    }

    case GET_TAGS: {
      const categories = state.categories;
      return update(state, {
        isLoading: { $set: false },
        tags: { $set: categories.concat(payload.tags) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
