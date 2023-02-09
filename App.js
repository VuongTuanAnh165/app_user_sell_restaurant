/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Preloading from './src/components/Preloading';
import HomeStackNavigator from './src/navigator/Navigator';
import BottomTabNavigator from './src/navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigator/Navigator';

const App = () => {

  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    SplashScreen.hide();
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Preloading visible={visible} />
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
