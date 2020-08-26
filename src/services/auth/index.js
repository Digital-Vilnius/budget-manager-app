import axiosInstance from '../axiosInstance';

class AuthService {
  static async login(request) {
    return axiosInstance.post('/authentication/login', request);
  }

  static async register(request) {
    return axiosInstance.post('/authentication/register', request);
  }

  static async getLoggedUser() {
    return axiosInstance.get('/authentication/logged-user');
  }
}

export default AuthService;
