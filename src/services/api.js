import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = (header = true, tokenRequest = false) => {
  const instance = axios.create({
    // baseURL: 'https://api-atento-hmg.azurewebsites.net/api', // HMG/QA
    // baseURL: 'https://api-atento-dev.azurewebsites.net/api', // Dev
    baseURL: 'https://atento-api.globalsys.com.br/api', // Production
  });

  if (header) {
    instance.interceptors.request.use(async (config) => {
      const setAuthHeader = config;
      const token = tokenRequest || (await AsyncStorage.getItem('@user_token'));
      setAuthHeader.headers.authorization = `Bearer ${token}`;
      return setAuthHeader;
    });
  }

  return instance;
};

export default api;
