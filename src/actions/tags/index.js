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

export function addTag(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: TagsTypes.ADD_TAG_START });
      await TagsService.addTag(request);
      dispatch({ type: TagsTypes.ADD_TAG });
      callback();
    } catch (exception) {
      console.log(exception);
      FlashMessagesService.showGenericError();
      dispatch({ type: TagsTypes.ADD_TAG_ERROR });
    }
  };
}

export function editTag(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: TagsTypes.EDIT_TAG_START });
      await TagsService.editTag(request);
      dispatch({ type: TagsTypes.EDIT_TAG });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagsTypes.EDIT_TAG_ERROR });
    }
  };
}

export function getTag(id) {
  return async dispatch => {
    try {
      dispatch({ type: TagsTypes.GET_TAG_START });
      const { result } = await TagsService.getTag(id);
      dispatch({ type: TagsTypes.GET_TAG, payload: { tag: result } });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagsTypes.GET_TAG_ERROR });
    }
  };
}
