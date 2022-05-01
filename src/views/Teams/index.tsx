import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PokeButton, PokeSearch, PokeText, PokeView } from '../../components';
import { IBaseScreen } from '../../definitions/screens';

const NoTeams = ({ navigation }: NativeStackNavigationProp<any, any>) => (
  <View style={styles.noTeamsContainer}>
    <PokeText
      text={'No teams created, do you\nwant to create one?'}
      type="heading"
    />
    <PokeButton text="Create team" plainBackground />
  </View>
);

const Teams = ({ navigation }: IBaseScreen<any, any>) => {
  const [teams, setTeams] = useState([]);
  return (
    <PokeView>
      <PokeSearch placeholder="Search for a team" />
      <NoTeams navigation={navigation} />
    </PokeView>
  );
};

export default Teams;

const styles = StyleSheet.create({
  noTeamsContainer: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
