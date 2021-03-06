import { View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import FastImage, { Source } from 'react-native-fast-image';

import { colors, images } from '../assets';
import PokeText from './PokeText';
import Chip from './Chip';

const { width } = Dimensions.get('screen');

export const ITEM_WIDTH = width * 0.76;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.86;
export const SPACING = 12;
export const FULL_SIZE = ITEM_WIDTH + SPACING * 2;
export const RADIUS = 22;

interface IPokeRegion {
  name: string;
  locations: [];
  onPress: Function;
}

const PokeRegion = ({ name, locations, onPress }: IPokeRegion) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress()}>
        <>
          <FastImage
            source={images[name] as Source}
            style={[styles.body]}
            resizeMode="cover"
          />
          <View style={[styles.body, styles.imageCover]} />
          <PokeText style={styles.regionName} text={name} type="heading" />
        </>
      </TouchableOpacity>
      <View style={styles.cardInfo}>
        <Chip text={name as keyof typeof colors} locations={locations.length} />
      </View>
    </View>
  );
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
    borderRadius: RADIUS,
  },
  imageCover: {
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.55,
  },
  cardInfo: {
    marginTop: 4,
    alignItems: 'center',
  },
  regionName: {
    color: '#FFF',
    fontSize: 48,
    marginLeft: 16,
    bottom: 12,
    position: 'absolute',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
