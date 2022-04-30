import { StyleSheet, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors, images } from '../assets';
import FastImage from 'react-native-fast-image';

const PokeView: React.FC = ({ children }): React.ReactElement => {
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
        style={styles.linearGradient}>
        <FastImage source={images.pokeball} style={styles.pokeball} />
        {children}
      </LinearGradient>
    </View>
  );
};

export default PokeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7,
    paddingTop: 65,
  },
  pokeball: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: -25,
    right: -25,
    opacity: 0.45,

    width: 260,
    height: 260,
    transform: [
      {
        rotate: '20deg',
      },
    ],
  },
});
