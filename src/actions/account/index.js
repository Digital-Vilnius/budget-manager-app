import { AccountsService, FlashMessagesService } from 'services';
import { AccountTypes } from 'types';

export function selectAccount(id, callback) {
  return async dispatch => {
    try {
      dispatch({ type: AccountTypes.SELECT_ACCOUNT_START });
      const { result } = await AccountsService.getAccount(id);
      dispatch({
        type: AccountTypes.SELECT_ACCOUNT,
        payload: { account: result },
      });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountTypes.SELECT_ACCOUNT_ERROR });
    }
  };
}
