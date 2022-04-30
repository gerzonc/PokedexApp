import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation';
import { Settings } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

GoogleSignin.configure({
  webClientId:
    '272365971408-u5lgtvhkm6502gpk9ldu0v7cfrajd62i.apps.googleusercontent.com',
});
Settings.initializeSDK();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
