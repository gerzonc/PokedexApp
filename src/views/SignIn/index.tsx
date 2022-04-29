import { ImageBackground, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import { images, colors } from '../../assets';
import styles from './styles';
import { PokeButton, PokeText } from '../../components';
import FastImage from 'react-native-fast-image';
import { IBaseScreen } from '../../definitions/screens';

const SignIn = ({ navigation }: IBaseScreen<any, any>) => {
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
            onPress={() => navigation.navigate('Home')}
          />
          <PokeButton text="Iniciar sesión con Facebook" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
