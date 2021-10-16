import { Dimensions } from 'react-native';
import deviceActions from '../store/device/device.actions';
import { store } from '../store/index';

export default () => {
  const getOrientation = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const setOrientation = () => {
    store.dispatch(
      deviceActions.setOrientation(
        getOrientation() ? 'vertical' : 'horizontal',
      ),
    );
  };

  setOrientation();

  Dimensions.addEventListener('change', () => {
    setOrientation();
  });
};
