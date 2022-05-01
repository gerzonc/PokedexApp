import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { getPokemonRegionDetails } from '../../api';
import {
  ActivityIndicator,
  NotFound,
  PokeRegion,
  PokeSearch,
  PokeView,
} from '../../components';
import { IBaseScreen } from '../../definitions/screens';
import { FULL_SIZE } from '../../components/PokeRegion';

const Home = ({ navigation }: IBaseScreen<any, any>): React.ReactElement => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemonRegionDetails().then((response: any) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const onSearchText = async (text: string) => {
    if (!text) {
      setSearching(false);
    }
    setSearching(true);
    const result = data.filter((value: any) =>
      value.name.includes(text.toLowerCase()),
    );
    setSearch(result);
  };

  const onPressItem = (item: any) =>
    navigation.navigate('Region', {
      name: item.name,
      regionPokemon: item.regionPokemon,
    });

  const renderItem = ({ item }: { item: any }) => (
    <PokeRegion
      name={item.name}
      locations={item.locations}
      onPress={() => onPressItem(item)}
    />
  );

  return (
    <PokeView>
      <StatusBar hidden />
      <PokeSearch
        placeholder="Search for a region"
        onChangeText={onSearchText}
      />
      {(searching && !search.length) || !data ? <NotFound /> : null}

      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={searching ? search : data}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={FULL_SIZE}
          decelerationRate="fast"
          pagingEnabled
          keyExtractor={(item, index) => (index + item).toString()}
          renderItem={renderItem}
        />
      )}
    </PokeView>
  );
};

export default Home;
