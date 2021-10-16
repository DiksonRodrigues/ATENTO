import types from './journeys.types';
import api from '../../services/api';
import { store } from '../index';

const getAll = async () => {
  const response = await api().get(`/QuestionarioApp`);
  store.dispatch({
    type: types.SET_DATA,
    payload: response.data,
  });
  return response;
};

export default {
  getAll,
};
