import {
  UPDATE_LOCALE,
  UPDATE_LOCALE_ERROR,
  UPDATE_LOCALE_START,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS_START,
  GET_USER_ERROR,
  GET_USER,
  GET_USER_START,
} from './types';
import { UsersService, FlashMessagesService } from 'services';

export function getUser(callback) {
  return async dispatch => {
    try {
      dispatch({ type: GET_USER_START });
      const { result } = await UsersService.getUser();
      dispatch({ type: GET_USER, payload: result });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_USER_ERROR });
    }
  };
}

export function updateLocale(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_LOCALE_START });
      await UsersService.updateLocale(request);
      dispatch({ type: UPDATE_LOCALE });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UPDATE_LOCALE_ERROR });
    }
  };
}

export function updateUserDetails(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_USER_DETAILS_START });
      await UsersService.updateUserDetails(request);
      dispatch({ type: UPDATE_USER_DETAILS });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UPDATE_USER_DETAILS_ERROR });
    }
  };
}
