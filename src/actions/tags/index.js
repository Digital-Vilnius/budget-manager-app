import { TagsService, FlashMessagesService } from 'services';
import { TagsTypes } from 'types';

export function getTags(request) {
  return async dispatch => {
    try {
      dispatch({ type: TagsTypes.GET_TAGS_START });
      const { result, count } = await TagsService.getTags(request);
      dispatch({
        type: TagsTypes.GET_TAGS,
        payload: { TAGS: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagsTypes.GET_TAGS_ERROR });
    }
  };
}

export function refreshTags(request) {
  return async dispatch => {
    try {
      dispatch({ type: TagsTypes.REFRESH_TAGS_START });
      const { result, count } = await TagsService.getTags(request);
      dispatch({
        type: TagsTypes.REFRESH_TAGS,
        payload: { tags: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagsTypes.REFRESH_TAGS_ERROR });
    }
  };
}
