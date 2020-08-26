import { TransactionsService, FlashMessagesService } from 'services';
import { TransactionsTypes } from 'types';

export function getTransactions(request) {
  return async dispatch => {
    try {
      dispatch({ type: TransactionsTypes.GET_TRANSACTIONS_START });
      const response = await TransactionsService.getTransactions(request);
      const { result, count } = response;
      dispatch({
        type: TransactionsTypes.GET_TRANSACTIONS,
        payload: { transactions: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TransactionsTypes.GET_TRANSACTIONS_ERROR });
    }
  };
}

export function refreshTransactions(request) {
  return async dispatch => {
    try {
      dispatch({ type: TransactionsTypes.REFRESH_TRANSACTIONS_START });
      const response = await TransactionsService.getTransactions(request);
      const { result, count } = response;
      dispatch({
        type: TransactionsTypes.REFRESH_TRANSACTIONS,
        payload: { transactions: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TransactionsTypes.REFRESH_TRANSACTIONS_ERROR });
    }
  };
}

export function addTransaction(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: TransactionsTypes.ADD_TRANSACTION_START });
      await TransactionsService.addTransaction(request);
      dispatch({ type: TransactionsTypes.ADD_TRANSACTION });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TransactionsTypes.ADD_TRANSACTION_ERROR });
    }
  };
}
