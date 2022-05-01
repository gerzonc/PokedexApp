import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useState } from 'react';

import { PokeButton, PokeSearch, PokeText, PokeView } from '../../components';
import { images } from '../../assets';

const NoTeams = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.noTeamsContainer}>
      <View style={styles.noTeamsBody}>
        <FastImage source={images.mewtwo} style={styles.mewtwo} />
        <PokeText
          text={'No teams created, do you\nwant to create one?'}
          type="heading"
        />
      </View>
      <PokeButton
        text="Create a team"
        plainBackground
        onPress={() => navigation.navigate('CreateTeam')}
      />
    </View>
  );
};

const Teams = () => {
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
    justifyContent: 'center',
  },
  noTeamsBody: {
    alignItems: 'center',
  },
  mewtwo: {
    width: 300,
    height: 300,
  },
});
