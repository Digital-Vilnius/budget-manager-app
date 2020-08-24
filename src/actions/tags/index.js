import { TagsService, FlashMessagesService } from 'services';
import {
  ADD_TAG,
  ADD_TAG_ERROR,
  ADD_TAG_START,
  GET_TAGS,
  GET_TAGS_ERROR,
  GET_TAGS_START,
  REFRESH_TAGS,
  REFRESH_TAGS_ERROR,
  REFRESH_TAGS_START,
  EDIT_TAG,
  EDIT_TAG_ERROR,
  EDIT_TAG_START,
  GET_TAG,
  GET_TAG_ERROR,
  GET_TAG_START,
} from './types';

export function getTags(request) {
  return async dispatch => {
    try {
      dispatch({ type: GET_TAGS_START });
      const { result, count } = await TagsService.getTags(request);
      dispatch({
        type: GET_TAGS,
        payload: { TAGS: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_TAGS_ERROR });
    }
  };
}

export function refreshTags(request) {
  return async dispatch => {
    try {
      dispatch({ type: REFRESH_TAGS_START });
      const { result, count } = await TagsService.getTags(request);
      dispatch({
        type: REFRESH_TAGS,
        payload: { tags: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: REFRESH_TAGS_ERROR });
    }
  };
}

export function addTag(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: ADD_TAG_START });
      await TagsService.addTag(request);
      dispatch({ type: ADD_TAG });
      callback();
    } catch (exception) {
      console.log(exception);
      FlashMessagesService.showGenericError();
      dispatch({ type: ADD_TAG_ERROR });
    }
  };
}

export function editTag(request, callback) {
  return async dispatch => {
    try {
      dispatch({ type: EDIT_TAG_START });
      await TagsService.editTag(request);
      dispatch({ type: EDIT_TAG });
      callback();
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: EDIT_TAG_ERROR });
    }
  };
}

export function getTag(id) {
  return async dispatch => {
    try {
      dispatch({ type: GET_TAG_START });
      const { result } = await TagsService.getTag(id);
      dispatch({ type: GET_TAG, payload: { tag: result } });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: GET_TAG_ERROR });
    }
  };
}
