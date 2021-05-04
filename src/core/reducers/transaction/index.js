import update from 'immutability-helper';
import { AccountTypes, AuthTypes, TransactionTypes } from 'core/types';

const initialState = {
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TransactionTypes.ADD_TRANSACTION_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case TransactionTypes.ADD_TRANSACTION_ERROR: {
      return initialState;
    }

    case TransactionTypes.ADD_TRANSACTION: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    default:
      return state;
  }
};
