import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_START,
  REFRESH_USERS,
  REFRESH_USERS_ERROR,
  REFRESH_USERS_START,
} from './types';
import { AccountUsersService, FlashMessagesService } from 'services';

export function getUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(request);
      dispatch({
        type: GET_USERS,
        payload: { users: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_USERS_ERROR });
    }
  };
}

export function refreshUsers(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_USERS_START });
      const { result, count } = await AccountUsersService.getAccountUsers(request);
      dispatch({
        type: REFRESH_USERS,
        payload: { users: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_USERS_ERROR });
    }
  };
}
