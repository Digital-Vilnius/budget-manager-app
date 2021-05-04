import axiosInstance from 'core/services/axiosInstance';
import { store } from 'core/store';

class AccountUsersService {
  static async getAccountUsers({ filter, paging }) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/accountUsers`, {
      params: { ...paging, ...filter },
    });
  }

  static findAccountUserById(id) {
    const accountUsers = store.getState().accountUsers.accountUsers;

    if (accountUsers.length > 0) {
      return accountUsers.find(accountUser => accountUser.id === id);
    }
  }
}

export default AccountUsersService;
