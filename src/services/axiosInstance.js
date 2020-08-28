import axios from 'axios';
import promise from 'promise';
import { store } from 'store';
import { AuthTypes } from 'types';
import FlashMessagesService from './flashMessages';
import * as NavigationService from './navigation';
import { NAVIGATORS } from 'constants';

const axiosInstance = axios.create({
  baseURL: 'https://3f45f5d89a04.ngrok.io/api',
});

axiosInstance.interceptors.request.use(
  async request => {
    const token = store.getState().auth.token;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    console.log(request);
    return request;
  },
  error => promise.reject(error),
);

axiosInstance.interceptors.response.use(
  async response => response.data,
  error => {
    const { response } = error;
    const { status } = response;
    switch (status) {
      case 401: {
        store.dispatch({ type: AuthTypes.LOGOUT });
        NavigationService.navigate(NAVIGATORS.AUTH);
        break;
      }

      case 403: {
        FlashMessagesService.showError('Forbidden');
        break;
      }

      default: {
        promise.reject(error);
        break;
      }
    }
  },
);

export default axiosInstance;
