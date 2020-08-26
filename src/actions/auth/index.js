import { AuthService, FlashMessagesService, NavigationService } from 'services';
import {
  GET_LOGGED_USER,
  GET_LOGGED_USER_ERROR,
  GET_LOGGED_USER_START,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_START,
  LOGOUT,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_START,
} from './types';
import { NAVIGATORS } from 'constants';

export function logout() {
  NavigationService.navigate(NAVIGATORS.AUTH);

  return {
    type: LOGOUT,
  };
}

export function login(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: LOGIN_START });
      const { result } = await AuthService.login(request);
      dispatch({ type: LOGIN, payload: result });
      callback();
    } catch (exception) {
      console.log(exception);
      FlashMessagesService.showGenericError();
      dispatch({ type: LOGIN_ERROR });
    }
  };
}

export function register(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: REGISTER_START });
      await AuthService.register(request);
      dispatch({ type: REGISTER });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REGISTER_ERROR });
    }
  };
}

export function getLoggedUser(callback) {
  return async dispatch => {
    try {
      dispatch({ type: GET_LOGGED_USER_START });
      const { result } = await AuthService.getLoggedUser();
      dispatch({ type: GET_LOGGED_USER, payload: result });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_LOGGED_USER_ERROR });
    }
  };
}
