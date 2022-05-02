import { View, StyleSheet } from 'react-native';
import React from 'react';
import { colors, images } from '../assets';
import PokeText from './PokeText';
import { PokeImage } from './PokeCard';

interface IPokeTeam {
  item: any;
  index: number;
}

const PokeTeam = ({ item, index }: IPokeTeam) => {
  return (
    <View style={styles.container}>
      <PokeText
        text={`#${index + 1} - ${item.teamName}`}
        type="heading"
        style={styles.number}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {item.teamPokemon.map((pokemon: any) => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <PokeImage
              actualSource={pokemon.pokeImage}
              placeholder={images.squirtleSilhouette}
              style={{ width: 100, height: 100 }}
            />
            <PokeText text={pokemon.name} style={styles.pokeName} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PokeTeam;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 186,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.searchBackgroundColor,
  },
  number: {
    opacity: 0.75,
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
    left: 0,
    flexDirection: 'row',
  },
  chip: {
    position: 'absolute',
  },
});
