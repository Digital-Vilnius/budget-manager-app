import { AccountsService, FlashMessagesService } from 'services';
import {
  GET_ACCOUNTS,
  GET_ACCOUNTS_ERROR,
  GET_ACCOUNTS_START,
  REFRESH_ACCOUNTS,
  REFRESH_ACCOUNTS_ERROR,
  REFRESH_ACCOUNTS_START,
} from './types';

export function getAccounts(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts(request);
      dispatch({
        type: GET_ACCOUNTS,
        payload: { accounts: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_ACCOUNTS_ERROR });
    }
  };
}

export function refreshAccounts(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_ACCOUNTS_START });
      const { result, count } = await AccountsService.getAccounts(request);
      dispatch({
        type: REFRESH_ACCOUNTS,
        payload: { accounts: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_ACCOUNTS_ERROR });
    }
  };
}
