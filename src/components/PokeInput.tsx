import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../assets';

interface IPokeInputProps extends TextInputProps {
  iconName: string;
}

const PokeInput = ({ iconName, ...props }: IPokeInputProps) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color={colors.normalText} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder || 'Search for a Pokémon'}
        placeholderTextColor={colors.inputText}
        {...props}
      />
    </View>
  );
};

export default PokeInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.searchBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 22,
    borderRadius: 15,
    margin: 16,
  },
  input: {
    fontWeight: 'bold',
    height: 55,
    borderRadius: 15,
    fontSize: 17,
    marginHorizontal: 10,
  },
});
