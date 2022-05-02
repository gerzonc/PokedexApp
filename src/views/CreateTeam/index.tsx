/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import { Picker } from '@react-native-picker/picker';

import { getPokemonByRegion, getPokemonRegionDetails } from '../../api';
import {
  ActivityIndicator,
  NotFound,
  PokeButton,
  PokeCard,
  PokeHeader,
  PokeInput,
  PokeSearch,
  PokeText,
  PokeView,
} from '../../components';
import { colors } from '../../assets';
import { IBaseScreen } from '../../definitions/screens';

// TODO: Formik
const CreateTeam = ({ navigation }: IBaseScreen<any, any>) => {
  const [teamName, setTeamName] = useState('');
  const [regions, setRegions] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searching, setSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState({
    regionPokemon: '',
    name: '',
  });
  const [dbLoading, setDbLoading] = useState(false);
  const [showRegionPicker, setShowRegionpicker] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    if (selectedRegion.regionPokemon) {
      setLoading(true);
      getPokemonByRegion(selectedRegion?.regionPokemon).then(
        (response: any) => {
          setData(response);
          setLoading(false);
        },
      );
    }
  }, [selectedRegion]);

  const onPressCreateTeam = () => {
    if (teamName && selectedPokemon.length) {
      setDbLoading(true);
      database()
        .ref(`/teams/${selectedRegion.name}`)
        .set({
          name: selectedRegion.name,
          teamName,
          teamPokemon: selectedPokemon,
        })
        .then(() => {
          setDbLoading(false);
          navigation.goBack();
        })
        .catch(e => {
          console.error(e);
        });
    } else {
      Alert.alert(
        'Something went wrong!',
        'An error has ocurred while creating the team. Check every field and try again',
        [
          {
            text: 'OK',
            style: 'destructive',
          },
        ],
      );
    }
  };

  const onPressSelectRegion = () => {
    getPokemonRegionDetails().then((response: any) => {
      setRegions(response);
    });

    if (regions) {
      setShowRegionpicker(true);
      setSelectedPokemon([]);
    }
  };

  const regionPicker = () => {
    return (
      <>
        <View style={styles.pickerContainer} />
        <Picker
          style={styles.picker}
          selectedValue={selectedRegion}
          onValueChange={itemValue => {
            setSelectedRegion(itemValue);
            setShowRegionpicker(false);
          }}>
          {regions.map((region: any, index: number) => (
            <Picker.Item
              key={index}
              label={region.name.toUpperCase()}
              value={region}
            />
          ))}
        </Picker>
      </>
    );
  };

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

  const onPressPokemon = (item: any) => {
    const isItemSelected = selectedPokemon.filter(
      (pokemon: any) => pokemon.name === item.name,
    );

    if (isItemSelected.length) {
      const filterPokemonFromSelected = selectedPokemon.filter(
        (pokemon: any) => pokemon.name !== item.name,
      );
      setSelectedPokemon(filterPokemonFromSelected);
    } else {
      setSelectedPokemon([...selectedPokemon, item]);
    }
  };

  const renderItem = ({ item }: { item: any }) => {
    const selected = selectedPokemon.find(
      (pokemon: any) => pokemon.name === item.name,
    );
    const disabled =
      selectedPokemon.length === 6 &&
      !selectedPokemon.find((pokemon: any) => pokemon.name === item.name);
    return (
      <Pressable
        disabled={disabled}
        style={disabled ? styles.disabledPokeCard : {}}
        onPress={() => onPressPokemon(item)}>
        <PokeCard
          pokeName={item.name}
          pokeImage={item.pokeImage}
          types={item.types}
          selected={selected}
        />
      </Pressable>
    );
  };

  const renderPokemon = () => {
    if (loading) {
      return <ActivityIndicator />;
    }

    if (!data.length) {
      return null;
    }

    if (searching && !search.length) {
      return <NotFound />;
    }

    return (
      <>
        <PokeText
          type="button"
          text="Select from 3 to 6 Pokémon"
          style={styles.info}
        />
        <FlatList
          data={searching ? search : data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={styles.container}
          keyExtractor={item => item.pokeImage}
          renderItem={renderItem}
        />
        {selectedPokemon.length >= 3 ? (
          <PokeButton
            style={styles.createTeamButton}
            onPress={onPressCreateTeam}
            text="Create Team"
            plainBackground
          />
        ) : null}
      </>
    );
  };

  return (
    <PokeView>
      <PokeHeader onPressLeft={() => navigation.goBack()} />
      <PokeText text="Create a Team" type="heading" style={styles.title} />
      <PokeInput
        iconName="user"
        value={teamName}
        placeholder="Team Name"
        onChangeText={value => setTeamName(value)}
      />
      <Pressable onPress={() => onPressSelectRegion()}>
        <PokeInput
          iconName="angle-down"
          editable={false}
          value={selectedRegion ? selectedRegion.name.toUpperCase() : ''}
          placeholder="Select a Region"
          showSoftInputOnFocus={false}
        />
      </Pressable>
      {dbLoading ? (
        <View style={styles.dbActivityIndicator}>
          <ActivityIndicator />
        </View>
      ) : null}
      {data.length > 0 ? <PokeSearch onChangeText={onSearchText} /> : null}
      {renderPokemon()}

      {showRegionPicker ? regionPicker() : null}
    </PokeView>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    marginLeft: 8,
  },
  title: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  dbActivityIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: colors.backgroundColor,
    opacity: 0.45,
    zIndex: 2,
  },
  pickerContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
    opacity: 0.6,
  },
  disabledPokeCard: {
    opacity: 0.35,
  },
  picker: {
    position: 'absolute',
    height: '35%',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: colors.searchBackgroundColor,
    bottom: 0,
    borderRadius: 15,
  },
  info: {
    marginLeft: 16,
    marginBottom: 16,
  },
  createTeamButton: {
    alignSelf: 'center',
    width: '90%',
    bottom: 34,
  },
});
