import { AuthService, FlashMessagesService, NavigationService } from 'services';
import {
  GET_LOGGED_USER,
  GET_LOGGED_USER_ERROR,
  GET_LOGGED_USER_START,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_START,
  LOGOUT,
  REGISTER_INDIVIDUAL,
  REGISTER_INDIVIDUAL_ERROR,
  REGISTER_INDIVIDUAL_START,
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
      FlashMessagesService.showGenericError();
      dispatch({ type: LOGIN_ERROR });
    }
  };
}

export function registerIndividual(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: REGISTER_INDIVIDUAL_START });
      await AuthService.registerIndividual(request);
      dispatch({ type: REGISTER_INDIVIDUAL });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REGISTER_INDIVIDUAL_ERROR });
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
