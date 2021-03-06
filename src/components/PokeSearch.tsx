import { StyleSheet, TextInputProps, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from '../assets';
import { TextInput } from 'react-native-gesture-handler';

interface IPokeSearch extends TextInputProps {
  right?: React.ReactElement;
}

const PokeSearch = (props: IPokeSearch) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={17} color={colors.normalText} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder || 'Search for a Pokémon'}
        placeholderTextColor={colors.inputText}
        {...props}
      />
    </View>
  );
};

export default PokeSearch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.searchBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    borderRadius: 15,
    margin: 16,
  },
  input: {
    height: 55,
    width: '100%',
    fontSize: 17,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});
