import update from 'immutability-helper';
import { AccountTypes, AuthTypes, TransactionsTypes } from 'types';

const initialState = {
  transactions: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TransactionsTypes.ADD_TRANSACTION_START:
    case TransactionsTypes.GET_TRANSACTIONS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case TransactionsTypes.REFRESH_TRANSACTIONS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case TransactionsTypes.REFRESH_TRANSACTIONS_ERROR:
    case TransactionsTypes.ADD_TRANSACTION_ERROR:
    case TransactionsTypes.GET_TRANSACTIONS_ERROR: {
      return initialState;
    }

    case TransactionsTypes.ADD_TRANSACTION: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case TransactionsTypes.REFRESH_TRANSACTIONS: {
      return update(state, {
        isRefreshing: { $set: false },
        transactions: { $set: payload.transactions },
        count: { $set: payload.count },
      });
    }

    case TransactionsTypes.GET_TRANSACTIONS: {
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
