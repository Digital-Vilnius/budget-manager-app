import { store } from 'core/store';
import axiosInstance from 'core/services/axiosInstance';

class TagsService {
  static async getTags({ filter, paging }) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/tags`, {
      params: { ...filter, ...paging },
    });
  }

  static async addTag(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.post(`/account/${accountId}/tags`, request);
  }

  static async editTag(request) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.put(`/account/${accountId}/tags`, request);
  }

  static async getTag(id) {
    const accountId = store.getState().account.account.id;
    return axiosInstance.get(`/account/${accountId}/tags/${id}`);
  }

  static findTagById(id) {
    const tags = store.getState().tags.tags;

    if (tags.length > 0) {
      return tags.find(tag => tag.id === id);
    }
  }
}

export default TagsService;
