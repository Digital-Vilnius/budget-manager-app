import axios from 'axios';
import promise from 'promise';
import { store } from 'store';
import { auth as actions } from 'actions';

const axiosInstance = axios.create({
  baseURL: 'https://125cb48333fe.ngrok.io/api',
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
        store.dispatch(actions.logout());
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
