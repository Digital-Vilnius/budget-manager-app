import axiosInstance from 'services/axiosInstance';
import { store } from 'store';

class UsersService {
  static async getUsers({ filter, paging }) {
    return axiosInstance.get('/accountUsers', {
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

export default UsersService;
