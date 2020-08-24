import update from 'immutability-helper';
import {
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  ADD_TRANSACTION_START,
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_START,
  REFRESH_TRANSACTIONS, REFRESH_TRANSACTIONS_ERROR,
  REFRESH_TRANSACTIONS_START,
} from 'actions/transactions/types';

const initialState = {
  transactions: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION_START:
    case GET_TRANSACTIONS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case REFRESH_TRANSACTIONS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case REFRESH_TRANSACTIONS_ERROR:
    case ADD_TRANSACTION_ERROR:
    case GET_TRANSACTIONS_ERROR: {
      return initialState;
    }

    case ADD_TRANSACTION: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case REFRESH_TRANSACTIONS: {
      return update(state, {
        isRefreshing: { $set: false },
        transactions: { $set: payload.transactions },
        count: { $set: payload.count },
      });
    }

    case GET_TRANSACTIONS: {
      const transactions = state.transactions;
      return update(state, {
        isLoading: { $set: false },
        transactions: { $set: transactions.concat(payload.transactions) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
