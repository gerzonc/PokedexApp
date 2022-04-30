import React, { useEffect, useState } from 'react';

import { getPokemonRegionDetails } from '../../api';
import PokeView from '../../components/PokeView';
import PokeRegion from '../../components/PokeRegion';
import { FlatList, StatusBar } from 'react-native';

const Home = (): React.ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      getPokemonRegionDetails().then((response: any) => setData(response));
    } catch (e) {
      // Do nothing
    }
  }, []);

  if (!data) {
    return <></>;
  }

  const renderItem = ({ item }) => (
    <PokeRegion
      name={item.name}
      // image={item.image}
      locations={item.locations}
    />
  );

  return (
    <PokeView>
      <StatusBar hidden />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item, index) => (index + item).toString()}
        renderItem={renderItem}
      />
    </PokeView>
  );
};

export default Home;
