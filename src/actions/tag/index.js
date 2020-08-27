import { TagsService, FlashMessagesService } from 'services';
import { TagTypes } from 'types';

export function addTag(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: TagTypes.ADD_TAG_START });
      await TagsService.addTag(request);
      dispatch({ type: TagTypes.ADD_TAG });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagTypes.ADD_TAG_ERROR });
    }
  };
}

export function editTag(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: TagTypes.EDIT_TAG_START });
      await TagsService.editTag(request);
      dispatch({ type: TagTypes.EDIT_TAG });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagTypes.EDIT_TAG_ERROR });
    }
  };
}

export function getTag(id) {
  return async dispatch => {
    try {
      dispatch({ type: TagTypes.GET_TAG_START });
      const { result } = await TagsService.getTag(id);
      dispatch({ type: TagTypes.GET_TAG, payload: { tag: result } });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: TagTypes.GET_TAG_ERROR });
    }
  };
}
