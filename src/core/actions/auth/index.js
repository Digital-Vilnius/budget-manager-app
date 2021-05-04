import {
  AuthService,
  FlashMessagesService,
  NavigationService,
} from 'core/services';
import { AuthTypes } from 'core/types';
import { NAVIGATORS } from 'core/constants';

export const logout = () => {
  NavigationService.reset(NAVIGATORS.AUTH);
  return { type: AuthTypes.LOGOUT };
};

export const login = (request, callback = null) => {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.LOGIN_START });
      const { result } = await AuthService.login(request);
      dispatch({ type: AuthTypes.LOGIN, payload: result });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.LOGIN_ERROR });
    }
  };
};

export const getLoggedUser = (callback = null) => {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.GET_LOGGED_USER_START });
      const { result } = await AuthService.getLoggedUser();
      dispatch({ type: AuthTypes.GET_LOGGED_USER, payload: result });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.GET_LOGGED_USER_ERROR });
    }
  };
};

export const updateLoggedUser = (request, callback = null) => {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.UPDATE_LOGGED_USER_START });
      await AuthService.updateLoggedUser(request);
      dispatch({ type: AuthTypes.UPDATE_LOGGED_USER });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.UPDATE_LOGGED_USER_ERROR });
    }
  };
};
