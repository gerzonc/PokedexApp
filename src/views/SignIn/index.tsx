import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import React, { useEffect } from 'react';

import { images, colors } from '../../assets';
import styles from './styles';
import { PokeButton, PokeText } from '../../components';
import { IBaseScreen } from '../../definitions/screens';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const SignIn = ({ navigation }: IBaseScreen<any, any>) => {
  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      // Do nothing
    }
  };
  const onFacebookButtonPress = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        return;
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        return;
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      return auth().signInWithCredential(facebookCredential);
    } catch (e) {
      // TODO: Crashlytics
    }
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.signinBackground}
        style={styles.imageBackground}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            colors.leftBackgroundContainer,
            colors.rightBackgroundContainer,
          ]}
          style={styles.linearGradient}
        />
        <FastImage source={images.appLogo} style={styles.appLogo} />
        <View style={styles.body}>
          <PokeText text="Iniciar sesión con" type="heading" />
          <PokeButton
            text="Iniciar sesión con Google"
            onPress={() => onGoogleButtonPress()}
          />
          <PokeButton
            text="Iniciar sesión con Facebook"
            onPress={() => onFacebookButtonPress()}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
