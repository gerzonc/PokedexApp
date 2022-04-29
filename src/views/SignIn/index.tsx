import { ImageBackground, Text, View } from 'react-native';
import React from 'react';

import images from '../../assets/images';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors';

const SignIn = () => {
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
        <Text>SignIn</Text>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
