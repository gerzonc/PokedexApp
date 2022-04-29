import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Button from '../../components/PokeButton';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Button text="Iniciar sesión" />
    </SafeAreaView>
  );
};

export default Home;
