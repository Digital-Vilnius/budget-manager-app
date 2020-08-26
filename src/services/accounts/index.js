import axiosInstance from '../axiosInstance';
import { store } from 'store';

class AccountsService {
  static async getAccount(id) {
    return axiosInstance.get(`/accounts/${id}`);
  }

  static async getAccounts({ filter, paging }) {
    return axiosInstance.get('/accounts', {
      params: { ...filter, ...paging },
    });
  }

  static findAccountById(id) {
    const accounts = store.getState().accounts.accounts;

    if (accounts.length > 0) {
      return accounts.find(account => account.id === id);
    }
  }
}

export default AccountsService;
