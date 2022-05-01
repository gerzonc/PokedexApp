import {
  ActivityIndicator as RNActivityIndicator,
  StyleSheet,
} from 'react-native';
import React from 'react';

import { colors } from '../assets';

const ActivityIndicator = () => {
  return (
    <RNActivityIndicator
      animating
      color={colors.fallback}
      style={styles.activityIndicator}
    />
  );
};

export default ActivityIndicator;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
  },
});
