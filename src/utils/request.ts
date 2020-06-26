import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { UserModule } from '@/store/modules/user';
import { getToken } from '@/utils/cookies';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
});


// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers['X-Access-Token'] = UserModule.token;
    }

    /*todo 这里没有解决调用接口问题，get的入参*/
    let base = {
        token : getToken(),
        appType : 3
    };
    if (config.method === 'post') {
        config.data = config.data || {};
        Object.assign(config.data,base);
    }
    if (config.method === 'get') {
        config.params = config.params || {};
        Object.assign(config.params,base);
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 200: success
    // code == 507: invalid access token
    // code == 500: time out
    // code == 506: err
    // You can change this part for your own usage.
    const res = response.data;
    if (res.resultCode !== 200) {
      if (res.resultCode === 500) {
        MessageBox.confirm(
          'timeout',
          'Log out',
          {
            confirmButtonText: 'Relogin',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          UserModule.ResetToken();
          location.reload(); // To prevent bugs from vue-router
        });
      } else {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        });
      }
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return response.data;
    }
  },
  (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;