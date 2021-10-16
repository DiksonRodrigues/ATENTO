import types from './sendingEvaluations.types';
import { store } from '../index';

const set = async (value) => {
  store.dispatch({
    type: types.SET_DATA,
    payload: value,
  });
};

export default {
  set,
};
