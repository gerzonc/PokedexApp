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
import { colors, images } from '../../assets';
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
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [dbLoading, setDbLoading] = useState(false);
  const db = useRef<any>(null);

  useEffect(() => {
    db.current = database().ref('/teams');
    const listener = db.current.on('value', (snapshot: any) => {
      if (snapshot.val()) {
        setLoading(true);
        const data = Object.keys(snapshot.val()).map(key => {
          return snapshot.val()[key];
        });
        setLoading(false);
        setTeams(data);
      }
    });
    return () => {
      db.current.off('value', listener);
    };
  }, []);

  const removeTeam = item => {
    setDbLoading(true);
    database().ref(`/teams/${item.name}`).remove();
    setDbLoading(false);
  };

  const onLongPressItem = async item => {
    Alert.alert('Delete team', 'Do you want to delete this team?', [
      {
        text: 'Cancel',
        style: 'default',
      },
      {
        text: 'OK',
        onPress: () => removeTeam(item),
        style: 'destructive',
      },
    ]);
  };

  const onSearchText = async (text: string) => {
    if (!text) {
      setSearching(false);
    }
    setSearching(true);
    const result = teams.filter((value: any) =>
      value.name.includes(text.toLowerCase()),
    );
    setSearch(result);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onLongPress={() => onLongPressItem(item)}>
        <PokeTeam index={index} item={item} />
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
      {teams.length > 0 ? (
        <PokeHeader onPressRight={() => navigation.navigate('CreateTeam')} />
      ) : null}
      <PokeSearch placeholder="Search for a team" onChangeText={onSearchText} />
      {dbLoading ? (
        <View style={styles.dbActivityIndicator}>
          <ActivityIndicator />
        </View>
      ) : null}
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
  dbActivityIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.backgroundColor,
    opacity: 0.45,
    zIndex: 2,
  },
  noTeamsBody: {
    alignItems: 'center',
  },
  mewtwo: {
    width: 300,
    height: 300,
  },
});
