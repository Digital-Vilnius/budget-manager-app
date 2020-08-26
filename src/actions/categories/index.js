import { CategoriesService, FlashMessagesService } from 'services';
import { CategoriesTypes } from 'types';

export function getCategories(request) {
  return async dispatch => {
    try {
      dispatch({ type: CategoriesTypes.GET_CATEGORIES_START });
      const { result, count } = await CategoriesService.getCategories(request);
      dispatch({
        type: CategoriesTypes.GET_CATEGORIES,
        payload: { categories: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoriesTypes.GET_CATEGORIES_ERROR });
    }
  };
}

export function refreshCategories(request) {
  return async dispatch => {
    try {
      dispatch({ type: CategoriesTypes.REFRESH_CATEGORIES_START });
      const { result, count } = await CategoriesService.getCategories(request);
      dispatch({
        type: CategoriesTypes.REFRESH_CATEGORIES,
        payload: { categories: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoriesTypes.REFRESH_CATEGORIES_ERROR });
    }
  };
}

export function addCategory(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: CategoriesTypes.ADD_CATEGORY_START });
      await CategoriesService.addCategory(request);
      dispatch({ type: CategoriesTypes.ADD_CATEGORY });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoriesTypes.ADD_CATEGORY_ERROR });
    }
  };
}

export function editCategory(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: CategoriesTypes.EDIT_CATEGORY_START });
      await CategoriesService.editCategory(request);
      dispatch({ type: CategoriesTypes.EDIT_CATEGORY });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoriesTypes.EDIT_CATEGORY_ERROR });
    }
  };
}

export function getCategory(id) {
  return async dispatch => {
    try {
      dispatch({ type: CategoriesTypes.GET_CATEGORY_START });
      const { result } = await CategoriesService.getCategory(id);
      dispatch({
        type: CategoriesTypes.GET_CATEGORY,
        payload: { category: result },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: CategoriesTypes.GET_CATEGORY_ERROR });
    }
  };
}
