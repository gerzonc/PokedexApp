import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { POKEMON_TYPES_COLORS } from '../assets/colors';

interface IChip {
  type: keyof typeof POKEMON_TYPES_COLORS;
}

const Chip = ({ type }: IChip) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: POKEMON_TYPES_COLORS[type] },
      ]}>
      <Text>Chip</Text>
    </View>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 25,
  },
});
