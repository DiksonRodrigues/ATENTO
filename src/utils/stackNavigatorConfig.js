import { CardStyleInterpolators } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';

const stackNavigatorConfig = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 200,
        easing: Easing.linear,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 200,
        easing: Easing.linear,
      },
    },
  },
};

export default stackNavigatorConfig;
