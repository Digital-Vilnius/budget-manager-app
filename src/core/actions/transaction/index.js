import { TransactionsService, FlashMessagesService } from 'core/services';
import { TransactionTypes } from 'core/types';


export function addTransaction(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: TransactionTypes.ADD_TRANSACTION_START });
      await TransactionsService.addTransaction(request);
      dispatch({ type: TransactionTypes.ADD_TRANSACTION });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TransactionTypes.ADD_TRANSACTION_ERROR });
    }
  };
}
