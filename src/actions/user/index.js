import { UserTypes } from 'types';
import { UsersService, FlashMessagesService } from 'services';

export function getUser(callback) {
  return async dispatch => {
    try {
      dispatch({ type: UserTypes.GET_USER_START });
      const { result } = await UsersService.getUser();
      dispatch({ type: UserTypes.GET_USER, payload: result });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UserTypes.GET_USER_ERROR });
    }
  };
}

export function updateLocale(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: UserTypes.UPDATE_LOCALE_START });
      await UsersService.updateLocale(request);
      dispatch({ type: UserTypes.UPDATE_LOCALE });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UserTypes.UPDATE_LOCALE_ERROR });
    }
  };
}

export function updateUserDetails(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: UserTypes.UPDATE_USER_DETAILS_START });
      await UsersService.updateUserDetails(request);
      dispatch({ type: UserTypes.UPDATE_USER_DETAILS });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: UserTypes.UPDATE_USER_DETAILS_ERROR });
    }
  };
}
