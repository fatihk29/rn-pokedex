import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// project imports
import commonStyles from '../styles/commonStyles';
import IconBtn from './IconBtn';
import { colors, textColor } from '../theme/Colors';

const Tag: React.FC<any> = ({ type }) => {
  return (
    <View style={{ ...styles.tag, backgroundColor: colors[type] }}>
      <IconBtn style={{ paddingHorizontal: 0 }} name={type} width={10} height={10} />
      <Text
        style={{
          color: textColor.white,
          marginLeft: 2,
          textTransform: 'capitalize',
        }}>
        {type}
      </Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    borderRadius: 10,
    marginRight: 5,
    padding: 5,
    marginTop: 2,
    ...commonStyles.row,
  },
});
