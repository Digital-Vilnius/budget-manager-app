import { AuthService, FlashMessagesService, NavigationService } from 'services';
import { AuthTypes } from 'types';
import { NAVIGATORS } from 'constants';

export function logout() {
  NavigationService.navigate(NAVIGATORS.AUTH);

  return {
    type: AuthTypes.LOGOUT,
  };
}

export function login(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.LOGIN_START });
      const { result } = await AuthService.login(request);
      dispatch({ type: AuthTypes.LOGIN, payload: result });
      callback();
    } catch (exception) {
      console.log(exception);
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.LOGIN_ERROR });
    }
  };
}

export function register(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.REGISTER_START });
      await AuthService.register(request);
      dispatch({ type: AuthTypes.REGISTER });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.REGISTER_ERROR });
    }
  };
}

export function getLoggedUser(callback) {
  return async dispatch => {
    try {
      dispatch({ type: AuthTypes.GET_LOGGED_USER_START });
      const { result } = await AuthService.getLoggedUser();
      dispatch({ type: AuthTypes.GET_LOGGED_USER, payload: result });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: AuthTypes.GET_LOGGED_USER_ERROR });
    }
  };
}
