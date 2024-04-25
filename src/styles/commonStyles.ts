import { StyleSheet } from 'react-native';
import { textColor } from '../theme/Colors';

// project imports

const fontFamily = StyleSheet.create({
  bold: {
    fontFamily: 'SF-Pro-Display-Bold',
  },
});

const commonStyles = StyleSheet.create({
  container: {
    padding: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    color: textColor.black,
    ...fontFamily.bold,
  },
  subHeading: {
    fontSize: 16,
    color: textColor.grey,
  },
  title: {
    fontSize: 26,
    color: textColor.white,
    // ...fontFamily.bold,
  },
  number: {
    fontSize: 12,
    color: textColor.number,
    // ...fontFamily.bold,
  },
});

export default commonStyles;