import update from 'immutability-helper';
import { AccountTypes, AuthTypes, InvitationsTypes } from 'types';

const initialState = {
  invitations: [],
  count: 0,
  isLoading: false,
  isRefreshing: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case InvitationsTypes.GET_INVITATIONS_START: {
      return update(state, {
        isLoading: { $set: true },
      });
    }

    case InvitationsTypes.REFRESH_INVITATIONS_START: {
      return update(state, {
        isRefreshing: { $set: true },
      });
    }

    case InvitationsTypes.REFRESH_INVITATIONS: {
      return update(state, {
        isRefreshing: { $set: false },
        invitations: { $set: payload.invitations },
        count: { $set: payload.count },
      });
    }

    case AccountTypes.SELECT_ACCOUNT:
    case AuthTypes.LOGOUT:
    case InvitationsTypes.REFRESH_INVITATIONS_ERROR:
    case InvitationsTypes.GET_INVITATIONS_ERROR: {
      return initialState;
    }

    case InvitationsTypes.GET_INVITATIONS: {
      const invitations = state.invitations;
      return update(state, {
        isLoading: { $set: false },
        invitations: { $set: invitations.concat(payload.invitations) },
        count: { $set: payload.count },
      });
    }

    default:
      return state;
  }
};
