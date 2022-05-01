import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import { colors, images } from '../assets';
import Chip from './Chip';

interface IPokeCard {
  pokeName: string;
  pokeImage: string;
  types: {
    type: {
      name: keyof typeof colors;
    };
  }[];
}

const PokeCard = ({ pokeName, pokeImage, types }: IPokeCard) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pokeName}>{pokeName || 'Placeholder'}</Text>
      <View style={styles.cardInfo}>
        <View style={styles.chip}>
          {types.length > 0
            ? types.map(({ type: { name } }) => <Chip text={name} />)
            : null}
        </View>
        <Image
          defaultSource={images.squirtleSilhouette}
          source={{ uri: pokeImage }}
          style={styles.pokeImage}
        />
      </View>
    </View>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: 182,
    height: 186,
    padding: 16,
    margin: 8,
    backgroundColor: colors.searchBackgroundColor,
  },
  pokeName: {
    fontSize: 20,
    marginBottom: 2,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  pokeImage: {
    alignSelf: 'flex-end',
    right: -58,
    bottom: -15,
    width: 125,
    height: 125,
  },
  cardInfo: {
    flexDirection: 'row',
  },
  chip: {
    position: 'absolute',
  },
});
