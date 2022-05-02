import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../assets';

const PokeTeam = () => {
  return (
    <View style={styles.container}>
      <Text>PokeTeam</Text>
    </View>
  );
};

export default PokeTeam;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    overflow: 'hidden',
    height: 186,
    padding: 16,
    margin: 8,
    backgroundColor: colors.searchBackgroundColor,
  },
});
