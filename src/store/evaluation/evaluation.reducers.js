import types from './evaluation.types';

const INITIAL_STATE = {
  journey: null,
  hardware: null,
  matricula: null,
  data: null,
  loading: false,
  test: {
    start: 0,
    end: 0,
    data: [],
  },
  questionnaire: {
    start: 0,
    end: 0,
    data: [],
  },
};

function evaluation(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SEND_EVALUATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_EVALUATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.SET_EVALUATION_JOURNEY:
      return {
        ...state,
        journey: action.payload,
      };
    case types.SET_TEST_DATA:
      return {
        ...state,
        test: action.payload,
      };
    case types.SET_QUESTIONNAIRE:
      return {
        ...state,
        questionnaire: action.payload,
      };
    case types.SET_HARDWARE:
      return {
        ...state,
        hardware: action.payload,
      };
    case types.SEND_EVALUATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.CLEAN:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default evaluation;
