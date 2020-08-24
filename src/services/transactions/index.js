import axiosInstance from '../axiosInstance';
import { store } from 'store';

class TransactionsService {
  static async getTransactions({ filter, paging }) {
    return axiosInstance.get('/transactions', {
      params: { ...paging, ...filter },
    });
  }

  static async addTransaction(request) {
    request.accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.post('/transactions', request);
  }
}

export default TransactionsService;
