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
}: IPokeButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={
          !plainBackground
            ? [colors.leftBackgroundContainer, colors.rightBackgroundContainer]
            : [colors.leftBackgroundContainer, colors.leftBackgroundContainer]
        }
        style={styles.buttonContainer}>
        {leftIcon ? leftIcon() : null}
        <PokeText type="button" text={text} />
      </LinearGradient>
    </Pressable>
  );
};

export default PokeButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    borderRadius: 15,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
