import types from './session.types';
import { store } from '../index';
import api from '../../services/api';

const loginOnline = async (identifier, nopId, empresaId) => {
  console.log({
    login: identifier,
    empresaId,
    nopId
  });
  const response = await api(false).post(
    `/Token/loginMobile`,
    {
      login: identifier,
      empresaId,
      nopId
    }
  );

  if (response.data) {
    store.dispatch({
      type: types.SET_DATA,
      payload: response.data,
    });
  }

  return response;
};

const loginOffline = (user) => {
  store.dispatch({ type: types.SET_DATA, payload: user });
};

const clean = () => {
  store.dispatch({ type: types.SET_DATA, payload: null });
};

export default {
  loginOnline,
  loginOffline,
  clean,
};
