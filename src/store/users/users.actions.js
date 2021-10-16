import api from '../../services/api';
import types from './users.types';
import { store } from '../index';

const getAll = async () => {
  const response = await api().get(`/Colaborador/listaMatriculaApp`);
  store.dispatch({ type: types.SET_DATA, payload: response.data });
  return response;
};

const setUsersList = (payload) => {
  store.dispatch({ type: types.SET_DATA, payload });
};

export default {
  getAll,
  setUsersList,
};
