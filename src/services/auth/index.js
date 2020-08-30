import axiosInstance from '../axiosInstance';

class AuthService {
  static async login(request) {
    return axiosInstance.post('/authentication/login', request);
  }

  static async getLoggedUser() {
    return axiosInstance.get('/authentication/logged-user');
  }

  static async updateLoggedUser(request) {
    return axiosInstance.put('/authentication/logged-user', request);
  }
}

export default AuthService;
