import axiosInstance from 'core/services/axiosInstance';
import { store } from 'core/store';

class TransactionsService {
  static async getTransactions({ filter, paging }) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/transactions`, {
      params: { ...paging, ...filter },
    });
  }

  static async addTransaction(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.post(`/account/${accountId}/transactions`, request);
  }
}

export default TransactionsService;
