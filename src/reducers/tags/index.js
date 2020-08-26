import update from 'immutability-helper';
import { AccountTypes, AuthTypes, TagsTypes } from 'types';

const initialState = {
  tags: [],
  tag: null,
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TagsTypes.EDIT_TAG_START:
    case TagsTypes.GET_TAG_START:
    case TagsTypes.ADD_TAG_START:
    case TagsTypes.GET_TAGS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case TagsTypes.REFRESH_TAGS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case TagsTypes.REFRESH_TAGS: {
      return update(state, {
        isRefreshing: { $set: false },
        tags: { $set: payload.tags },
        count: { $set: payload.count },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case TagsTypes.GET_TAG_ERROR:
    case TagsTypes.EDIT_TAG_ERROR:
    case TagsTypes.REFRESH_TAGS_ERROR:
    case TagsTypes.ADD_TAG_ERROR:
    case TagsTypes.GET_TAGS_ERROR: {
      return initialState;
    }

    case TagsTypes.EDIT_TAG:
    case TagsTypes.ADD_TAG: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case TagsTypes.GET_TAG: {
      return update(state, {
        isLoading: { $set: false },
        tag: { $set: payload.tag },
      });
    }

    case TagsTypes.GET_TAGS: {
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
