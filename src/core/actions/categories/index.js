import { CategoriesService, FlashMessagesService } from 'core/services';
import { CategoriesTypes } from 'core/types';

export const getCategories = (request) => {
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
};

export const refreshCategories = (request) => {
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
};
