import { TransactionsService, FlashMessagesService } from 'core/services';
import { TransactionsTypes } from 'core/types';

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
