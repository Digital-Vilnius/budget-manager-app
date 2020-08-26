import axiosInstance from '../axiosInstance';

class UsersService {
  static async updateLocale(request) {
    return axiosInstance.put('/user/locale', request);
  }

  static async updateUserDetails(request) {
    return axiosInstance.put('/user/details', request);
  }

  static async getUser() {
    return axiosInstance.get('/user');
  }
}

export default UsersService;
