import { CategoryTypes } from 'types';
import { CategoriesService, FlashMessagesService } from 'services';

export function addCategory(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: CategoryTypes.ADD_CATEGORY_START });
      await CategoriesService.addCategory(request);
      dispatch({ type: CategoryTypes.ADD_CATEGORY });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoryTypes.ADD_CATEGORY_ERROR });
    }
  };
}

export function editCategory(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: CategoryTypes.EDIT_CATEGORY_START });
      await CategoriesService.editCategory(request);
      dispatch({ type: CategoryTypes.EDIT_CATEGORY });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoryTypes.EDIT_CATEGORY_ERROR });
    }
  };
}

export function getCategory(id) {
  return async dispatch => {
    try {
      dispatch({ type: CategoryTypes.GET_CATEGORY_START });
      const { result } = await CategoriesService.getCategory(id);
      dispatch({
        type: CategoryTypes.GET_CATEGORY,
        payload: { category: result },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoryTypes.GET_CATEGORY_ERROR });
    }
  };
}
