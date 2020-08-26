import {
  GET_ACCOUNT_USERS,
  GET_ACCOUNT_USERS_ERROR,
  GET_ACCOUNT_USERS_START,
  REFRESH_ACCOUNT_USERS,
  REFRESH_ACCOUNT_USERS_ERROR,
  REFRESH_ACCOUNT_USERS_START,
} from './types';
import { AccountUsersService, FlashMessagesService } from 'services';

export function getAccountUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_ACCOUNT_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(
        request,
      );
      dispatch({
        type: GET_ACCOUNT_USERS,
        payload: { accountUsers: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_ACCOUNT_USERS_ERROR });
    }
  };
}

export function refreshAccountUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_ACCOUNT_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(
        request,
      );
      dispatch({
        type: REFRESH_ACCOUNT_USERS,
        payload: { accountUsers: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_ACCOUNT_USERS_ERROR });
    }
  };
}
