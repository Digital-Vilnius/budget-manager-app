import axiosInstance from '../axiosInstance';
import { store } from 'store';

class AccountsService {
  static async getAccounts() {
    return axiosInstance.get('/accounts');
  }

  static findAccountById(id) {
    const accounts = store.getState().accounts.accounts;

    if (accounts.length > 0) {
      return accounts.find(account => account.id === id);
    }
  }
}

export default AccountsService;
