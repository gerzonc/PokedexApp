import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
