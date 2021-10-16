import { store } from '../index';
import types from './storage.types';
import api from '../../services/api';
import SendingEvaluationsActions from '../sendingEvaluations/sendingEvaluations.actions';

const setEvaluation = (payload) => {
  return function (dispatch) {
    dispatch({ type: types.SET_STORAGE_EVALUATION, payload });
  };
};

const sendEvaluations = async (evaluations, sendingEvaluations) => {
  if (evaluations && evaluations.length > 0 && !sendingEvaluations) {
    try {
      SendingEvaluationsActions.set(true);

      const response = await api().post(
        `/SalvarApp/SalvarAppLista`,
        evaluations,
      );

      if (response && response.data && response.data.length > 0) {
        if (response.data.length > 0) {
          const filteredEvaluations = evaluations.filter((evaluation) => {
            return !response.data.includes(
              evaluation.avaliacao.IdentificadorUnico,
            );
          });

          store.dispatch({
            type: types.SET_STORAGE_EVALUATIONS,
            payload: filteredEvaluations,
          });
        }
        SendingEvaluationsActions.set(false);
      }
    } catch (e) {
      SendingEvaluationsActions.set(false);
      throw new Error(
        'Ocorreu um erro na sincronização, tente novamente, se o erro persistir contacte a equipe de desenvolvimento',
      );
    }
  }
};

export default {
  setEvaluation,
  sendEvaluations,
};
