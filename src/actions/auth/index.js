import { AuthService, FlashMessagesService, NavigationService } from 'services';
import { AuthTypes } from 'types';
import { NAVIGATORS } from 'constants';

export function logout() {
  NavigationService.reset(NAVIGATORS.AUTH);

  return {
    type: AuthTypes.LOGOUT,
  };
}

export function login(request, callback = null) {
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
}

export function register(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.REGISTER_START });
      await AuthService.register(request);
      dispatch({ type: AuthTypes.REGISTER });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.REGISTER_ERROR });
    }
  };
}

export function getLoggedUser(callback = null) {
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
}

export function updateLoggedUser(request, callback = null) {
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
}
