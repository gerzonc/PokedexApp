import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, { useEffect, useState } from 'react';

import styles from './styles';

import { colors } from '../../assets';
import { PokeSearch } from '../../components';
import { getPokemonList } from '../../api';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    getPokemonList();
    // console.log({  });
  }, []);

  if (!data) {
    return;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[
          colors.leftBackgroundContainer,
          colors.centerBackgroundContainer,
          colors.rightBackgroundContainer,
        ]}
        locations={[0, 0.5, 1]}
        useAngle={true}
        angle={110}
        angleCenter={{ x: 0.4, y: 0.5 }}
        style={styles.linearGradient}>
        <PokeSearch />
      </LinearGradient>
    </View>
  );
};

export default Home;
