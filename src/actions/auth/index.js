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
  UPDATE_LOCALE,
  UPDATE_LOCALE_ERROR,
  UPDATE_LOCALE_START,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS_START,
} from './types';
import { NAVIGATORS } from 'constants';

export function logout() {
  NavigationService.navigate(NAVIGATORS.AUTH);

  return {
    type: LOGOUT,
  };
}

export function updateLocale(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: UPDATE_LOCALE_START });
      await AuthService.updateLocale(request);
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
      await AuthService.updateUserDetails(request);
      dispatch({ type: UPDATE_USER_DETAILS });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UPDATE_USER_DETAILS_ERROR });
    }
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
