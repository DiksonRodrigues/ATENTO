import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './utils/routes';
import stackNavigatorConfig from './utils/stackNavigatorConfig';
import setDeviceOrientation from './utils/setDeviceOrientation';
import UpdateWarning from './screens/UpdateWarning';
import checksAppIsUpToDate from './services/checksAppIsUpToDate';

const Routes = () => {
  const Stack = createStackNavigator();

  const [isAppUpToDate, setIsAppUpToDate] = useState(true);

  const fetchVersion = async () => {
    const isAppUpToDateResponse = await checksAppIsUpToDate();
    setIsAppUpToDate(isAppUpToDateResponse);
  };

  useEffect(() => {
    fetchVersion();
  }, []);

  useEffect(() => {
    setDeviceOrientation();
  }, []);

  return isAppUpToDate ? (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        headerMode="none"
        screenOptions={stackNavigatorConfig}
      >
        {routes.map((route, i) => (
          <Stack.Screen
            key={`route-${i}`}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </>
  ) : (
    <UpdateWarning />
  );
};

export default Routes;
