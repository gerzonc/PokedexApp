import { View, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import PokeText from './PokeText';

interface IChip {
  text?: keyof typeof colors;
  locations?: number;
}

const Chip = ({ text, locations }: IChip) => {
  if (!locations || !text) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: text ? colors[text] : colors.fallback,
        },
      ]}>
      <PokeText
        style={styles.text}
        text={locations ? `Locations: ${locations}` : text}
      />
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    height: 25,
    borderRadius: 25,
    margin: 8,
  },
  text: {
    color: colors.rightBackgroundContainer,
  },
});
