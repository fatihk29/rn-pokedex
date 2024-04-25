import { StyleSheet } from 'react-native';

// project imports
import { textColor } from '../../theme/Colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColor.white,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
});

export default style;
