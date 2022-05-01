import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PokeHeader = ({
  onPress,
}: {
  onPress?: ((event: GestureResponderEvent) => void) & (() => void);
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="arrow-back-sharp" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default PokeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});
