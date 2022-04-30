import React, { useEffect, useState } from 'react';

import { PokeSearch } from '../../components';
import { getPokemonByRegion } from '../../api';
import PokeView from '../../components/PokeView';

const Home = (): React.ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPokemonByRegion();
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <PokeView>
      <PokeSearch />
    </PokeView>
  );
};

export default Home;
