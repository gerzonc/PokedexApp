import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { getPokemonByRegion } from '../../api';
import { PokeCard, PokeSearch, PokeView } from '../../components';
import ActivityIndicator from '../../components/ActivityIndicator';
import NotFound from '../../components/NotFound';
import PokeHeader from '../../components/PokeHeader';
import { IBaseScreen } from '../../definitions/screens';
import styles from './styles';

const Region = ({ navigation, route }: IBaseScreen<any, any>) => {
  const { regionPokemon }: any = route.params;
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

  const renderItem = ({ item }: { item: any }) => (
    <PokeCard
      pokeName={item.name}
      pokeImage={item.pokeImage}
      types={item.types}
    />
  );

  const Pokemon = () => {
    if (loading) {
      return <ActivityIndicator />;
    }

    if ((searching && !search.length) || !data) {
      return <NotFound />;
    }

    return (
      <FlatList
        data={searching ? search : data}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.container}
        keyExtractor={item => item.pokeImage}
        renderItem={renderItem}
      />
    );
  };

  return (
    <PokeView>
      <PokeHeader onPress={() => navigation.goBack()} />
      <PokeSearch onChangeText={onSearchText} />
      <Pokemon />
    </PokeView>
  );
};

export default Region;
