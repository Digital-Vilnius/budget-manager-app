import { InvitationsService, FlashMessagesService } from 'services';
import { InvitationsTypes } from 'types';

export function getInvitations(request) {
  return async dispatch => {
    try {
      dispatch({ type: InvitationsTypes.GET_INVITATIONS_START });
      const { result, count } = await InvitationsService.getInvitations(
        request,
      );
      dispatch({
        type: InvitationsTypes.GET_INVITATIONS,
        payload: { invitations: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvitationsTypes.GET_INVITATIONS_ERROR });
    }
  };
}

export function refreshInvitations(request) {
  return async dispatch => {
    try {
      dispatch({ type: InvitationsTypes.REFRESH_INVITATIONS_START });
      const { result, count } = await InvitationsService.getInvitations(
        request,
      );
      dispatch({
        type: InvitationsTypes.REFRESH_INVITATIONS,
        payload: { invitations: result, count },
      });
    } catch (exception) {
      FlashMessagesService.showGenericError();
      dispatch({ type: InvitationsTypes.REFRESH_INVITATIONS_ERROR });
    }
  };
}
