import types from './params.types';
import api from '../../services/api';
import { store } from '../index';

const get = async () => {
  const response = await api().get(`/Parametro/ListaParametro`);
  store.dispatch({
    type: types.SET_DATA,
    payload: response.data,
  });
  return response;
};

export default {
  get,
};
