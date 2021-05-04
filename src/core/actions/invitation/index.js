import { InvitationTypes } from 'core/types';
import { InvitationsService, FlashMessagesService } from 'core/services';

export function addInvitation(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: InvitationTypes.ADD_INVITATION_START });
      await InvitationsService.addInvitation(request);
      dispatch({ type: InvitationTypes.ADD_INVITATION });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvitationTypes.ADD_INVITATION_ERROR });
    }
  };
}

export function deleteInvitation(request, callback = null) {
  return async dispatch => {
    try {
      dispatch({ type: InvitationTypes.DELETE_INVITATION_START });
      await InvitationsService.deleteInvitation(request);
      dispatch({ type: InvitationTypes.DELETE_INVITATION });
      if (callback) {
        callback();
      }
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvitationTypes.DELETE_INVITATION_ERROR });
    }
  };
}

export function getInvitation(id) {
  return async dispatch => {
    try {
      dispatch({ type: InvitationTypes.GET_INVITATION_START });
      const { result } = await InvitationsService.getInvitation(id);
      dispatch({
        type: InvitationTypes.GET_INVITATION,
        payload: { invitation: result },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvitationTypes.GET_INVITATION_ERROR });
    }
  };
}
