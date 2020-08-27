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
