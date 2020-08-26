import { store } from 'store';
import axiosInstance from '../axiosInstance';

class CategoriesService {
  static async getCategories({ filter, paging }) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/categories`, {
      params: { ...filter, ...paging },
    });
  }

  static async addCategory(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.post(`/account/${accountId}/categories`, request);
  }

  static async editCategory(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.put(`/account/${accountId}/categories`, request);
  }

  static async getCategory(id) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/categories/${id}`);
  }

  static findCategoryById(id) {
    const categories = store.getState().categories.categories;

    if (categories.length > 0) {
      return categories.find(category => category.id === id);
    }
  }
}

export default CategoriesService;
