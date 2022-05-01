import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getPokemonRegionDetails } from '../../api';
import {
  PokeButton,
  PokeHeader,
  PokeInput,
  PokeText,
  PokeView,
} from '../../components';
import { colors } from '../../assets';
import { Picker } from '@react-native-picker/picker';
import { IBaseScreen } from '../../definitions/screens';

const CreateTeam = ({ navigation }: IBaseScreen<any, any>) => {
  const [teamName, setTeamName] = useState('');
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [showRegionPicker, setShowRegionpicker] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onPressSelectRegion = () => {
    getPokemonRegionDetails().then((response: any) => {
      setRegions(response);
    });

    if (regions) {
      setShowRegionpicker(true);
    }
  };

  const regionPicker = () => {
    return (
      <>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#000',
            opacity: 0.6,
          }}
        />
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

  return (
    <PokeView>
      <PokeHeader onPress={() => navigation.goBack()} />
      <PokeText text="Create a Team" type="heading" style={styles.title} />
      <PokeInput
        iconName="user"
        value={teamName}
        placeholder="Team Name"
        onChangeText={value => setTeamName(value)}
      />
      <TouchableOpacity onPress={() => onPressSelectRegion()}>
        <PokeInput
          iconName="angle-down"
          editable={false}
          value={selectedRegion ? selectedRegion.name.toUpperCase() : ''}
          placeholder="Select a Region"
          showSoftInputOnFocus={false}
        />
      </TouchableOpacity>
      <PokeButton
        disabled={!selectedRegion}
        plainBackground
        onPress={() =>
          navigation.push('Region', {
            regionPokemon: selectedRegion?.regionPokemon,
          })
        }
        text="Add Pokemon to Team"
      />
      {showRegionPicker ? regionPicker() : null}
    </PokeView>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginHorizontal: 16,
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
});
