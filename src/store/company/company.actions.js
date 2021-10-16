import api from '../../services/api';
import types from './company.types';
import { store } from '../index';

const get = async () => {
  const response = await api().get(`/Empresa/empresaNopByColaborador`);
  store.dispatch({ type: types.SET_DATA, payload: response.data });
  return response;
};

export default {
  get,
};
