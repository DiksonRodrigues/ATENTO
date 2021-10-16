import types from './storage.types';

const INITIAL_STATE = {
  evaluation: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_STORAGE_EVALUATION:
      return {
        ...state,
        evaluation: [...state.evaluation, action.payload],
      };
    case types.SET_STORAGE_EVALUATIONS:
      return {
        ...state,
        evaluation: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
