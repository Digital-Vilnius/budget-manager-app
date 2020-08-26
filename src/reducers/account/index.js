import update from 'immutability-helper';
import {
  SELECT_ACCOUNT_START,
  SELECT_ACCOUNT_ERROR,
  SELECT_ACCOUNT,
} from 'actions/account/types';

const initialState = {
  account: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_ACCOUNT_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case SELECT_ACCOUNT_ERROR: {
      return initialState;
    }

    case SELECT_ACCOUNT: {
      return update(state, {
        isLoading: { $set: false },
        account: { $set: payload.account },
      });
    }

    default:
      return state;
  }
};
