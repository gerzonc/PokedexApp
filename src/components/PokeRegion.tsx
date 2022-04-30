import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../assets';
import Chip from './Chip';
import { POKEMON_TYPES_COLORS } from '../assets/colors';
import FastImage, { Source } from 'react-native-fast-image';

interface IPokeCard {
  pokeName: string;
  pokeImage: number | Source;
  types: Array<keyof typeof POKEMON_TYPES_COLORS>;
}

const PokeRegion = ({ pokeName, pokeImage, types }: IPokeCard) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pokeName}>{pokeName || 'Placeholder'}</Text>
      <View style={styles.cardInfo}>
        {types && types.length > 0
          ? types.map(type => <Chip type={type} />)
          : null}
        <FastImage source={pokeImage} />
      </View>
    </View>
  );
};

export default PokeRegion;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 182,
    height: 170,
    padding: 16,
    backgroundColor: colors.searchBackgroundColor,
  },
  pokeName: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  cardInfo: {
    flexDirection: 'row',
  },
});
