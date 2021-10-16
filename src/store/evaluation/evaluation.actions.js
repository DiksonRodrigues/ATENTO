import Geolocation from '@react-native-community/geolocation';
import UserAgent from 'react-native-user-agent';
import { isTablet } from 'react-native-device-info';
import { Dimensions } from 'react-native';

import types from './evaluation.types';
import api from '../../services/api';

function setJourney(payload) {
  return {
    type: types.SET_EVALUATION_JOURNEY,
    payload,
  };
}

function setTestData(payload) {
  return {
    type: types.SET_TEST_DATA,
    payload,
  };
}

function setQuestionnaire(payload) {
  return {
    type: types.SET_QUESTIONNAIRE,
    payload,
  };
}

function setHardware(dispatch) {
  const hardwareInfo = {
    Hardware: isTablet() ? 'tablet' : 'mobile',
    UserAgentHw: UserAgent.getUserAgent(),
    LarguraDisplayHw: Math.round(Dimensions.get('screen').width),
    ComprimentoDisplayHw: Math.round(Dimensions.get('screen').height),
    X_RazaoPixelCm: 0,
    Y_RazaoPixelCm: 0,
    LoadJanelaHw: 0,
  };

  const geoSuccess = (info) => {
    dispatch({
      type: types.SET_HARDWARE,
      payload: {
        ...hardwareInfo,
        Localizacao: `lat:${info.coords.latitude} lon:${info.coords.longitude}`,
      },
    });
  };

  const geoError = () => {
    dispatch({
      type: types.SET_HARDWARE,
      payload: {
        ...hardwareInfo,
        Localizacao: `lat:0 lon:0`,
      },
    });
  };

  const geoOptions = {
    timeout: 15000,
    maximumAge: 0,
    enableHighAccuracy: true,
  };

  Geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
}

function sendEvaluation(payload) {
  return (dispatch) => {
    dispatch({ type: types.SEND_EVALUATION_REQUEST });
    api()
      .post(`/SalvarApp`, payload)
      .then((response) => {
        dispatch({
          type: types.SEND_EVALUATION_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: types.SEND_EVALUATION_FAILURE, payload: error });
      });
  };
}

const sendOnlineEvaluation = async (evaluations) => {
  const newEvaluations = evaluations.map((i) => {
    return {
      ...i,
      avaliacao: {
        ...i.avaliacao,
        DataEnvio: Date.now(),
      },
    };
  });

  await api().post(`/SalvarApp/SalvarAppLista`, newEvaluations);
};

function clean() {
  return { type: types.CLEAN };
}

export default {
  clean,
  setJourney,
  setTestData,
  setHardware,
  sendEvaluation,
  setQuestionnaire,
  sendOnlineEvaluation,
};
