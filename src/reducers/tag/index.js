import update from 'immutability-helper';
import { AccountTypes, AuthTypes, TagTypes } from 'types';

const initialState = {
  tag: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TagTypes.EDIT_TAG_START:
    case TagTypes.GET_TAG_START:
    case TagTypes.ADD_TAG_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case TagTypes.GET_TAG_ERROR:
    case TagTypes.EDIT_TAG_ERROR:
    case TagTypes.ADD_TAG_ERROR: {
      return initialState;
    }

    case TagTypes.EDIT_TAG:
    case TagTypes.ADD_TAG: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case TagTypes.GET_TAG: {
      return update(state, {
        isLoading: { $set: false },
        tag: { $set: payload.tag },
      });
    }

    default:
      return state;
  }
};
