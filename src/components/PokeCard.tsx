import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { colors, images } from '../assets';
import Chip from './Chip';
import FastImage, { Source } from 'react-native-fast-image';

interface IPokeCard {
  pokeName: string;
  pokeImage: string;
  types: {
    type: {
      name: keyof typeof colors;
      url: string;
    };
  }[];
}

interface IImage {
  actualSource: string;
  placeholder: Source;
}

const PokeImage = ({ actualSource, placeholder }: IImage) => {
  const [source, setSource] = useState(placeholder);
  return (
    <FastImage
      source={source}
      onLoadEnd={() => setSource({ uri: actualSource })}
      style={styles.pokeImage}
    />
  );
};

const PokeCard = ({ pokeName, pokeImage, types }: IPokeCard) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pokeName}>{pokeName || 'Placeholder'}</Text>
      <View style={styles.cardInfo}>
        <View style={styles.chip}>
          {types.length > 0
            ? types.map(({ type }) => <Chip key={type.url} text={type.name} />)
            : null}
        </View>
        <FastImage source={images.pokeball} style={styles.pokeball} />
        <PokeImage
          actualSource={pokeImage}
          placeholder={images.squirtleSilhouette}
        />
      </View>
    </View>
  );
};

export default PokeCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: 'hidden',
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
  pokeball: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: -35,
    right: -35,
    opacity: 0.25,
    width: 150,
    height: 150,
    transform: [
      {
        rotate: '20deg',
      },
    ],
    zIndex: -1,
  },
  cardInfo: {
    flexDirection: 'row',
  },
  chip: {
    position: 'absolute',
  },
});
