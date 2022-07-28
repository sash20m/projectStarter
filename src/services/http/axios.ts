import $axios from 'axios';
import Config from 'react-native-config';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.baseURL = Config.API_URL;

export const axiosHeadersUpdater = (): void => {
  // get token from storage
  const token = '';

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else if (axios.defaults.headers.common.Authorization) {
    delete axios.defaults.headers.common.Authorization;
  }
};

axiosHeadersUpdater();
