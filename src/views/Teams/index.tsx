import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import React, { useEffect, useRef, useState } from 'react';

import {
  PokeButton,
  PokeSearch,
  PokeText,
  PokeView,
  PokeTeam,
  ActivityIndicator,
  NotFound,
  PokeHeader,
} from '../../components';
import { images } from '../../assets';
import database from '@react-native-firebase/database';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { IBaseScreen } from '../../definitions/screens';

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

const Teams = ({ navigation }: IBaseScreen<any, any>) => {
  const [teams, setTeams] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState([]);
  const db = useRef<any>(null);

  useEffect(() => {
    db.current = database().ref('/teams');
    const listener = db.current.on('value', (snapshot: any) => {
      if (snapshot.val()) {
        const data = Object.keys(snapshot.val()).map(key => {
          return snapshot.val()[key];
        });
        setTeams(data);
      }
    });
    return () => {
      db.current.off('value', listener);
    };
  }, []);

  const onLongPressItem = async item => {
    Alert.alert('Delete team', 'Do you want to delete this team?', [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'OK',
        onPress: () => database().ref(`/teams/${item.name}`).remove(),
        style: 'destructive',
      },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onLongPress={() => onLongPressItem(item)}>
        <PokeTeam />
      </TouchableOpacity>
    );
  };

  const renderTeams = () => {
    if (loading) {
      return <ActivityIndicator />;
    }

    if (!teams?.length) {
      return (
        <PokeView>
          <NoTeams />
        </PokeView>
      );
    }

    if (searching && !search.length) {
      return <NotFound />;
    }

    return (
      <FlatList
        data={searching ? search : teams}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={styles.container}
        renderItem={renderItem}
      />
    );
  };

  return (
    <PokeView>
      <PokeHeader onPressRight={() => navigation.navigate('CreateTeam')} />
      <PokeSearch placeholder="Search for a team" />
      {renderTeams()}
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
