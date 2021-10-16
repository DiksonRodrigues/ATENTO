import types from './session.types';

const INITIAL_STATE = {
  data: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
