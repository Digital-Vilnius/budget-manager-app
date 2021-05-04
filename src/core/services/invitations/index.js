import { store } from 'core/store';
import axiosInstance from 'core/services/axiosInstance';

class InvitationsService {
  static async getInvitations({ filter, paging }) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/invitations`, {
      params: { ...filter, ...paging },
    });
  }

  static async addInvitation(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.post(`/account/${accountId}/invitations`, request);
  }

  static async deleteInvitation(id) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.delete(`/account/${accountId}/invitations/${id}`);
  }

  static async getInvitation(id) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/invitations/${id}`);
  }

  static findInvitationById(id) {
    const invitations = store.getState().invitations.invitations;

    if (invitations.length > 0) {
      return invitations.find(invitation => invitation.id === id);
    }
  }
}

export default InvitationsService;
