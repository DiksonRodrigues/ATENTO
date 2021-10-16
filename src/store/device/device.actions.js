import types from './device.types';

const setOrientation = (payload) => {
  return { type: types.SET_DEVICE_ORIENTATION, payload };
};

export default {
  setOrientation,
};
