import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PokeHeader = ({
  onPressLeft,
  onPressRight,
}: {
  onPressLeft?: ((event: GestureResponderEvent) => void) & (() => void);
  onPressRight?: ((event: GestureResponderEvent) => void) & (() => void);
}) => {
  return (
    <View style={styles.container}>
      {onPressLeft ? (
        <TouchableOpacity onPress={onPressLeft}>
          <Icon name="arrow-back-sharp" size={32} />
        </TouchableOpacity>
      ) : null}
      <View />
      {onPressRight ? (
        <TouchableOpacity onPress={onPressRight}>
          <Icon name="add-outline" size={32} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default PokeHeader;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
