import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getPokemonByRegion } from '../../api';
import { PokeSearch, PokeView } from '../../components';
import ActivityIndicator from '../../components/ActivityIndicator';
import NotFound from '../../components/NotFound';
import PokeHeader from '../../components/PokeHeader';
import { IBaseScreen } from '../../definitions/screens';

const Region = ({ navigation, route }: IBaseScreen<any, any>) => {
  const { name, regionPokemon } = route.params;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemonByRegion(regionPokemon).then((response: any) => {
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

  //   const onPressItem = (item: any) =>
  //     navigation.navigate('Region', {
  //       name: item.name,
  //       regionPokemon: item.regionPokemon,
  //     });

  const renderItem = ({ item }: { item: any }) => (
    <PokeRegion
      name={item.name}
      locations={item.locations}
      onPress={() => onPressItem(item)}
    />
  );

  return (
    <PokeView>
      <PokeHeader onPress={() => navigation.goBack()} />
      <PokeSearch onChangeText={onSearchText} />
      {(searching && !search.length) || !data ? <NotFound /> : null}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={searching ? search : data}
          showsHorizontalScrollIndicator
          keyExtractor={(item, index) => (index + item).toString()}
          renderItem={renderItem}
        />
      )}
    </PokeView>
  );
};

export default Region;
