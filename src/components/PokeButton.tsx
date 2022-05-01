import { Pressable, StyleSheet, PressableProps } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../assets/colors';
import PokeText from './PokeText';

interface IPokeButtonProps extends PressableProps {
  text?: string;
  leftIcon?: () => React.ReactElement;
  plainBackground?: boolean;
}

const PokeButton = ({
  text,
  leftIcon,
  onPress,
  plainBackground,
  disabled,
  style,
}: IPokeButtonProps) => {
  const isPlainBackground = !plainBackground
    ? [colors.leftBackgroundContainer, colors.rightBackgroundContainer]
    : [colors.normalText, colors.normalText];
  return (
    <Pressable disabled={disabled} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          disabled ? [colors.normalText, colors.normalText] : isPlainBackground
        }
        style={[styles.buttonContainer, style]}>
        {leftIcon ? leftIcon() : null}
        <PokeText
          type="button"
          text={text}
          style={disabled ? styles.disabled : styles.buttonText}
        />
      </LinearGradient>
    </Pressable>
  );
};

export default PokeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledContainer: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: colors.buttonText,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  disabled: {
    color: colors.inputText,
  },
});
