/* eslint-disable react-native/no-inline-styles */
import { View, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import PokeText from './PokeText';

interface IChip {
  text?: keyof typeof colors;
  locations?: number;
}

const Chip = ({ text, locations }: IChip) => {
  if (!text) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          width: locations !== undefined ? '45%' : text.length * 14,
          backgroundColor: colors[text] ? colors[text] : colors.fallback,
        },
      ]}>
      <PokeText
        style={locations !== undefined ? styles.locations : styles.text}
        text={locations !== undefined ? `Locations: ${locations}` : text}
      />
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    marginBottom: 2,
    borderRadius: 25,
  },
  text: {
    color: colors.backgroundColor,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  locations: {
    color: colors.rightBackgroundContainer,
  },
});
