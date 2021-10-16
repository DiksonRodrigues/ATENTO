import types from './sendingEvaluations.types';

const INITIAL_STATE = false;

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
