import { Text, View } from 'react-native';
import React from 'react';

import styles from './styles';
import Button from '../../components/PokeButton';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets';

const Home = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          colors.leftBackgroundContainer,
          colors.centerBackgroundContainer,
          colors.rightBackgroundContainer,
        ]}
        locations={[0, 0.5, 1]}
        useAngle={true}
        angle={110}
        angleCenter={{ x: 0.4, y: 0.5 }}
        style={styles.linearGradient}
      />
      <Text>Hello World!</Text>
      <Button text="Iniciar sesión" />
    </View>
  );
};

export default Home;
