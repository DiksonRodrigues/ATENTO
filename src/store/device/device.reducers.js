import types from './device.types';

const INITIAL_STATE = {
  orientation: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_DEVICE_ORIENTATION:
      return {
        ...state,
        orientation: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
