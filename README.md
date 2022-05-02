<img src="./src/assets/images/app_logo@3x.png" align="center" />
<p align="center"> A Pokédex app made with React Native! </p>

### Table of Contents
  * [Pre-requisites](#prerequisites)
  * [Installation and usage](#installation)
  * [In case you might want to try with your developer account](#testing)
  * [Screenshots](#screenshot)
  * [Features](#features)
  * [Libraries](#libraries)

## <a name="prerequisites"></a> Pre-requisites

Ensure you have followed the installation process for [React Native](https://reactnative.dev/docs/environment-setup)

## <a name="installation"></a> Installation and usage

First ensure you have an Android emulator with Google Play Services or an iOS simulator with at least iOS 12.

For installing this project on your machine just clone the project and run in the console: 
```console
$ yarn install
```
or
```console
$ npm install
```

Once you've done all the process explained above, run:
```console
$ npx react-native run-android
```
or
```console
$ npx react-native run-ios
```

## <a name="testing"></a> In case you might want to try with your developer account

Follow [this](https://rnfirebase.io/auth/social-auth) documentation for Google and Facebook sign-in setup. In case you might run with any issue with any of these, ensure that you followed the Troubleshooting FAQ for each of these or the ones on their libs ([Here](https://github.com/react-native-google-signin/google-signin/blob/master/docs/ios-guide.md) for Google and [here](https://github.com/react-native-google-signin/google-signin/blob/master/docs/ios-guide.md) for Facebook)

## <a name="features"></a> Features

1. Log-in with Google and Facebook
2. List every Pokémon region
3. List every Pokémon *by* region
4. Create Pokémon team
5. Delete Pokémon team
6. Data persistance with Firebase Realtime Databse

## <a name="screenshot"></a> Screenshots

<p align="center">
   <img src="https://user-images.githubusercontent.com/36211892/166177310-f7555469-a143-4367-b872-5e6576e235d3.png" width="250"/>
   <img src="https://user-images.githubusercontent.com/36211892/166177325-6a83310c-3f2f-4e71-81be-716e9a03f5b1.png" width="250"/>
   <img src="https://user-images.githubusercontent.com/36211892/166177527-a37ae5d7-a867-48ff-a3bb-2db008c615d6.png" width="250"/>
   <img src="https://user-images.githubusercontent.com/36211892/166177574-59a89049-9a14-446a-bb44-6a446efee0f0.png" width="250"/>
   <img src="https://user-images.githubusercontent.com/36211892/166177626-b4ba5b49-b2d2-49ad-bf8b-4b4f81f8dfd3.png" width="250"/>
   <img src="https://user-images.githubusercontent.com/36211892/166178146-0f7fdf36-8ecd-4bb9-bd52-da78d7826bc5.png" width="250"/>
</p>

## <a name="libraries"></a> Libraries used
```json
    "@react-native-firebase/app": "^14.9.1",
    "@react-native-firebase/auth": "^14.9.1",
    "@react-native-firebase/database": "^14.9.1",
    "@react-native-google-signin/google-signin": "^7.2.2",
    "@react-native-picker/picker": "^2.4.1",
    "@react-navigation/bottom-tabs": "^6.3.1",
    "@react-navigation/native": "^6.0.10",
    "@react-navigation/native-stack": "^6.6.2",
    "lottie-ios": "3.2.3",
    "lottie-react-native": "^5.0.1",
    "react": "17.0.2",
    "react-native": "0.68.1",
    "react-native-fast-image": "^8.5.11",
    "react-native-fbsdk-next": "^8.0.0",
    "react-native-gesture-handler": "^2.4.1",
    "react-native-linear-gradient": "^2.5.6",
    "react-native-reanimated": "^2.8.0",
    "react-native-safe-area-context": "^4.2.5",
    "react-native-screens": "^3.13.1",
    "react-native-vector-icons": "^9.1.0"
```

