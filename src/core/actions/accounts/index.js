import { AccountsService, FlashMessagesService } from 'core/services';
import { AccountsTypes } from 'core/types';

export const getAccounts = (request) => {
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
};

export const refreshAccounts = (request) => {
  return async dispatch => {
    try {
      dispatch({ type: AccountsTypes.REFRESH_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts(request);
      dispatch({
        type: AccountsTypes.REFRESH_ACCOUNTS,
        payload: { accounts: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountsTypes.REFRESH_ACCOUNTS_ERROR });
    }
  };
};
