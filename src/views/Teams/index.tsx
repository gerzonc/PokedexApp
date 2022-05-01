import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { PokeButton, PokeSearch, PokeText, PokeView } from '../../components';
import { IBaseScreen } from '../../definitions/screens';

const NoTeams = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.noTeamsContainer}>
      <PokeText
        text={'No teams created, do you\nwant to create one?'}
        type="heading"
      />
      <PokeButton
        text="Create a team"
        plainBackground
        onPress={() => navigation.navigate('CreateTeam')}
      />
    </View>
  );
};

const Teams = ({ navigation }: IBaseScreen<any, any>) => {
  const [teams, setTeams] = useState([]);

  if (!teams.length) {
    return (
      <PokeView>
        <NoTeams />
      </PokeView>
    );
  }
  return (
    <PokeView>
      <PokeSearch placeholder="Search for a team" />
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
