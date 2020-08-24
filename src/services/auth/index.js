import axiosInstance from '../axiosInstance';

class AuthService {
  static async login(request) {
    return axiosInstance.post('/authentication/login', request);
  }

  static async registerIndividual(request) {
    return axiosInstance.post('/authentication/register', request);
  }

  static async registerFamily(request) {
    return axiosInstance.post('/authentication/register', request);
  }

  static async getLoggedUser() {
    return axiosInstance.get('/authentication/logged-user');
  }
}

export default AuthService;
