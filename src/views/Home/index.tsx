import React, { useEffect, useState } from 'react';

import { getPokemonRegionDetails } from '../../api';
import PokeView from '../../components/PokeView';
import PokeRegion, { FULL_SIZE } from '../../components/PokeRegion';
import { FlatList, StatusBar } from 'react-native';
import ActivityIndicator from '../../components/ActivityIndicator';

const Home = (): React.ReactElement => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getPokemonRegionDetails().then((response: any) => {
        setData(response);
        setLoading(false);
      });
    } catch (e) {
      // Do nothing
    }
  }, []);

  const renderItem = ({ item }) => (
    <PokeRegion name={item.name} locations={item.locations} />
  );

  if (loading) {
    return (
      <PokeView>
        <ActivityIndicator />
      </PokeView>
    );
  }

  if (!data) {
    return <></>;
  }

  return (
    <PokeView>
      <StatusBar hidden />
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={FULL_SIZE}
        decelerationRate="fast"
        pagingEnabled
        keyExtractor={(item, index) => (index + item).toString()}
        renderItem={renderItem}
      />
    </PokeView>
  );
};

export default Home;
