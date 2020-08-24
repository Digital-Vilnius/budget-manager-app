import { TransactionsService, FlashMessagesService } from 'services';
import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_ERROR,
  GET_TRANSACTIONS_START,
  ADD_TRANSACTION,
  ADD_TRANSACTION_ERROR,
  ADD_TRANSACTION_START,
  REFRESH_TRANSACTIONS,
  REFRESH_TRANSACTIONS_ERROR,
  REFRESH_TRANSACTIONS_START,
} from './types';

export function getTransactions(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_TRANSACTIONS_START });
      const response = await TransactionsService.getTransactions(request);
      const { result, count } = response;
      dispatch({
        type: GET_TRANSACTIONS,
        payload: { transactions: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_TRANSACTIONS_ERROR });
    }
  };
}

export function refreshTransactions(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_TRANSACTIONS_START });
      const response = await TransactionsService.getTransactions(request);
      const { result, count } = response;
      dispatch({
        type: REFRESH_TRANSACTIONS,
        payload: { transactions: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_TRANSACTIONS_ERROR });
    }
  };
}

export function addTransaction(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: ADD_TRANSACTION_START });
      await TransactionsService.addTransaction(request);
      dispatch({ type: ADD_TRANSACTION });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ADD_TRANSACTION_ERROR });
    }
  };
}
