import types from './params.types';

const INITIAL_STATE = null;

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
