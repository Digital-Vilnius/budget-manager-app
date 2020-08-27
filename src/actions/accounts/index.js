import { AccountsService, FlashMessagesService } from 'services';
import { AccountsTypes } from 'types';

export function getAccounts(request) {
  return async dispatch => {
    try {
      dispatch({ type: AccountsTypes.GET_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts(request);
      dispatch({
        type: AccountsTypes.GET_ACCOUNTS,
        payload: { accounts: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountsTypes.GET_ACCOUNTS_ERROR });
    }
  };
}

export function refreshAccounts(request) {
  return async dispatch => {
    try {
      dispatch({ type: AccountsTypes.REFRESH_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts(request);
      dispatch({
        type: AccountsTypes.REFRESH_ACCOUNTS,
        payload: { accounts: result, count },
      });
    } catch (exception) {
      console.log(exception);
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountsTypes.REFRESH_ACCOUNTS_ERROR });
    }
  };
}
