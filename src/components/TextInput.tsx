import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { textColor } from '../theme/Colors';

const TextInputComp: React.FC<any> = ({ ...props }) => {
  const [text, onChangeText] = React.useState<string>('');

  return (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor={textColor.grey}
        {...props}
      />
    </View>
  );
};

export default TextInputComp;

const style = StyleSheet.create({});
