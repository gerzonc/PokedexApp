import { Text, Pressable, StyleSheet, PressableProps } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/colors';

interface IButtonProps extends PressableProps {
  text?: string;
  leftIcon?: () => React.ReactElement;
}

const Button = ({ text, leftIcon, onPress }: IButtonProps) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          colors.leftBackgroundContainer,
          colors.rightBackgroundContainer,
        ]}
        style={styles.buttonContainer}>
        {leftIcon ? leftIcon() : null}
        <Text style={styles.buttonText}>{text || 'Placeholder'}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
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
