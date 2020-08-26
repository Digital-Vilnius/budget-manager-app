import axiosInstance from 'services/axiosInstance';
import { store } from 'store';

class AccountUsersService {
  static async getAccountUsers({ filter, paging }) {
    const accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.get(`/account/${accountId}/accountUsers`, {
      params: { ...paging, ...filter },
    });
  }

  static findUserById(id) {
    const users = store.getState().users.users;

    if (users.length > 0) {
      return users.find(user => user.id === id);
    }
  }
}

export default AccountUsersService;
