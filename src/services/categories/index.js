import { store } from 'store';
import axiosInstance from '../axiosInstance';

class CategoriesService {
  static async getCategories({ filter, paging }) {
    return axiosInstance.get('/categories', {
      params: { ...filter, ...paging },
    });
  }

  static async addCategory(request) {
    request.accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.post('/categories', request);
  }

  static async editCategory(request) {
    return axiosInstance.put('/categories', request);
  }

  static async getCategory(id) {
    return axiosInstance.get(`/categories/${id}`);
  }

  static findCategoryById(id) {
    const categories = store.getState().categories.categories;

    if (categories.length > 0) {
      return categories.find(category => category.id === id);
    }
  }
}

export default CategoriesService;
