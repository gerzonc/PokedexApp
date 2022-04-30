import { View, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { images } from '../assets';
import PokeText from './PokeText';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={images.squirtle}
        autoPlay
        loop
        style={styles.squirtle}
      />
      <PokeText
        style={styles.notFound}
        text="No results, sorry!"
        type="heading"
      />
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFound: {
    fontSize: 42,
    marginTop: 16,
  },
  squirtle: {
    width: 250,
    height: 250,
  },
});
