import { store } from 'store';
import axiosInstance from '../axiosInstance';

class TagsService {
  static async getTags({ filter, paging }) {
    return axiosInstance.get('/tags', {
      params: { ...filter, ...paging },
    });
  }

  static async addTag(request) {
    request.accountId = store.getState().accounts.selectedAccount.id;
    return axiosInstance.post('/tags', request);
  }

  static async editTag(request) {
    return axiosInstance.put('/tags', request);
  }

  static async getTag(id) {
    return axiosInstance.get(`/tags/${id}`);
  }

  static findTagById(id) {
    const tags = store.getState().tags.tags;

    if (tags.length > 0) {
      return tags.find(tag => tag.id === id);
    }
  }
}

export default TagsService;
