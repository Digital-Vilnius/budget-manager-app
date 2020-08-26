import { AccountsService, FlashMessagesService } from 'services';
import {
  SELECT_ACCOUNT,
  SELECT_ACCOUNT_ERROR,
  SELECT_ACCOUNT_START,
} from './types';

export function selectAccount(id, callback) {
  return async dispatch => {
    try {
      dispatch({ type: SELECT_ACCOUNT_START });
      const { result } = await AccountsService.getAccount(id);
      dispatch({
        type: SELECT_ACCOUNT,
        payload: { account: result },
      });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: SELECT_ACCOUNT_ERROR });
    }
  };
}
