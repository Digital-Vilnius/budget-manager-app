import { CategoriesService, FlashMessagesService } from 'services';
import {
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
  ADD_CATEGORY_START,
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_START,
  REFRESH_CATEGORIES,
  REFRESH_CATEGORIES_ERROR,
  REFRESH_CATEGORIES_START,
  EDIT_CATEGORY,
  EDIT_CATEGORY_ERROR,
  EDIT_CATEGORY_START,
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_START,
} from './types';

export function getCategories(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_CATEGORIES_START });
      const { result, count } = await CategoriesService.getCategories(request);
      dispatch({
        type: GET_CATEGORIES,
        payload: { categories: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_CATEGORIES_ERROR });
    }
  };
}

export function refreshCategories(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_CATEGORIES_START });
      const { result, count } = await CategoriesService.getCategories(request);
      dispatch({
        type: REFRESH_CATEGORIES,
        payload: { categories: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_CATEGORIES_ERROR });
    }
  };
}

export function addCategory(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: ADD_CATEGORY_START });
      await CategoriesService.addCategory(request);
      dispatch({ type: ADD_CATEGORY });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: ADD_CATEGORY_ERROR });
    }
  };
}

export function editCategory(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: EDIT_CATEGORY_START });
      await CategoriesService.editCategory(request);
      dispatch({ type: EDIT_CATEGORY });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: EDIT_CATEGORY_ERROR });
    }
  };
}

export function getCategory(id) {
  return async dispatch => {
    try {
      dispatch({ type: GET_CATEGORY_START });
      const { result } = await CategoriesService.getCategory(id);
      dispatch({ type: GET_CATEGORY, payload: { category: result } });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_CATEGORY_ERROR });
    }
  };
}
