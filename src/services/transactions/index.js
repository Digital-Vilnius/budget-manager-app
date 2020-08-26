import axiosInstance from '../axiosInstance';
import { store } from 'store';

class TransactionsService {
  static async getTransactions({ filter, paging }) {
    const accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.get(`/account/${accountId}/transactions`, {
      params: { ...paging, ...filter },
    });
  }

  static async addTransaction(request) {
    const accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.post(`/account/${accountId}/transactions`, request);
  }
}

export default TransactionsService;
