import { AccountsService, FlashMessagesService } from 'core/services';
import { AccountTypes } from 'core/types';

export const selectAccount = (id, callback = null) => {
  return async dispatch => {
    try {
      dispatch({ type: AccountTypes.SELECT_ACCOUNT_START });
      const { result } = await AccountsService.getAccount(id);
      dispatch({
        type: AccountTypes.SELECT_ACCOUNT,
        payload: { account: result },
      });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountTypes.SELECT_ACCOUNT_ERROR });
    }
  };
};
