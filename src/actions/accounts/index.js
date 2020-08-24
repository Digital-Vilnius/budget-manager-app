import { AccountsService, FlashMessagesService } from 'services';
import { GET_ACCOUNTS, GET_ACCOUNTS_ERROR, GET_ACCOUNTS_START, SELECT_ACCOUNT } from './types';

export function getAccounts(callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: GET_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts();
      dispatch({
        type: GET_ACCOUNTS,
        payload: { accounts: result, count, selectedAccount: result[0] },
      });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_ACCOUNTS_ERROR });
    }
  };
}

export function selectAccount(request) {
  return {
    type: SELECT_ACCOUNT,
    payload: { account: request.account },
  };
}
