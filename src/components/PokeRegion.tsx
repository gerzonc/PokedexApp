import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import { colors, images } from '../assets';
import FastImage, { Source } from 'react-native-fast-image';
import PokeText from './PokeText';
import Chip from './Chip';

const { width } = Dimensions.get('screen');

export const ITEM_WIDTH = width * 0.76;
export const ITEM_HEIGHT = ITEM_WIDTH * 1.86;
export const SPACING = 12;
export const FULL_SIZE = ITEM_WIDTH + SPACING * 2;
export const RADIUS = 25;

interface IPokeRegion extends TouchableOpacityProps {
  name: string;
  locations: [];
}

const PokeRegion = ({ name, locations, onPress }: IPokeRegion) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <FastImage
          source={images[name] as Source}
          style={[styles.body]}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.cardInfo}>
        <PokeText style={styles.regionName} text={name} type="heading" />
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
  cardInfo: {
    marginTop: 4,
    alignItems: 'center',
  },
  regionName: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
