/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { Settings } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';

database().setPersistenceEnabled(true);
GoogleSignin.configure({
  webClientId:
    '272365971408-u5lgtvhkm6502gpk9ldu0v7cfrajd62i.apps.googleusercontent.com',
});
Settings.initializeSDK();

AppRegistry.registerComponent(appName, () => App);
