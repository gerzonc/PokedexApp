import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { colors, images } from '../assets';
import FastImage, { Source } from 'react-native-fast-image';

const { width } = Dimensions.get('screen');

const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.86;

interface IPokeRegion {
  name: string;
  locations: [];
}

const PokeRegion = ({ name, locations }: IPokeRegion) => {
  return (
    <View style={styles.container}>
      <FastImage
        source={images[name] as Source}
        style={[StyleSheet.absoluteFillObject, styles.body]}
        resizeMode="cover"
      />
      <View style={styles.cardInfo}>
        <Text style={styles.pokeName}>{name || 'Placeholder'}</Text>
      </View>
    </View>
  );
};

const SPACING = 12;

const s = width * 0.68;

const spec = {
  ITEM_WIDTH: s,
  ITEM_HEIGHT: s * 1.5,
  RADIUS: 18,
  SPACING,
  FULL_SIZE: s + SPACING * 2,
};

export default PokeRegion;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    margin: SPACING,
  },
  body: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    borderRadius: 25,
  },
  pokeName: {
    fontSize: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  cardInfo: {
    flexDirection: 'row',
  },
});
