import { Text, TextProps } from 'react-native';
import React from 'react';

interface IPokeText extends TextProps {
  text?: string;
}

const PokeText = ({ text }: IPokeText) => {
  return <Text>{text || 'Placeholder'}</Text>;
};

export default PokeText;
