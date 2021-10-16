import types from './loading.types';
import { store } from '../index';

const set = async (isLoading) => {
  store.dispatch({
    type: types.SET_DATA,
    payload: isLoading,
  });
};

export default {
  set,
};
