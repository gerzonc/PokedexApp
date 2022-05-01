import { StyleSheet, Text, TextProps } from 'react-native';
import React from 'react';

import colors from '../assets/colors';

interface IPokeText extends TextProps {
  text?: string;
  type?: 'heading' | 'button';
}

const PokeText = ({ text, type, style }: IPokeText) => {
  return (
    <Text style={[type ? styles[type] : styles.default, style]}>
      {text || 'Placeholder'}
    </Text>
  );
};

export default PokeText;

const styles = StyleSheet.create({
  default: {
    color: colors.normalText,
  },
  button: {
    color: colors.buttonText,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  heading: {
    color: colors.normalText,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
