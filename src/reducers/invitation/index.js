import update from 'immutability-helper';
import { AccountTypes, AuthTypes, InvitationTypes } from 'types';

const initialState = {
  invitation: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case InvitationTypes.DELETE_INVITATION_START:
    case InvitationTypes.GET_INVITATION_START:
    case InvitationTypes.ADD_INVITATION_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case InvitationTypes.DELETE_INVITATION_ERROR:
    case InvitationTypes.GET_INVITATION_ERROR:
    case InvitationTypes.ADD_INVITATION_ERROR: {
      return initialState;
    }

    case InvitationTypes.ADD_INVITATION: {
      return update(state, {
        isLoading: { $set: false },
      });
    }

    case InvitationTypes.GET_INVITATION: {
      return update(state, {
        isLoading: { $set: false },
        invitation: { $set: payload.invitation },
      });
    }

    default:
      return state;
  }
};
