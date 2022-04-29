import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  appLogo: {
    width: 328,
    height: 121,
    marginBottom: 100,
  },
  body: {
    marginBottom: 55,
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 213,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
});
