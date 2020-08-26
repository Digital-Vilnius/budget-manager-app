import { AccountUsersTypes } from 'types';
import { AccountUsersService, FlashMessagesService } from 'services';

export function getAccountUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: AccountUsersTypes.GET_ACCOUNT_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(
        request,
      );
      dispatch({
        type: AccountUsersTypes.GET_ACCOUNT_USERS,
        payload: { accountUsers: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountUsersTypes.GET_ACCOUNT_USERS_ERROR });
    }
  };
}

export function refreshAccountUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: AccountUsersTypes.REFRESH_ACCOUNT_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(
        request,
      );
      dispatch({
        type: AccountUsersTypes.REFRESH_ACCOUNT_USERS,
        payload: { accountUsers: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AccountUsersTypes.REFRESH_ACCOUNT_USERS_ERROR });
    }
  };
}
