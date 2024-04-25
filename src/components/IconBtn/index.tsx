import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface IconBtnProps {
  children?: any;
  onPress?: any;
  style?: any;
}
const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});

const IconBtn: React.FC<IconBtnProps> = ({ children, onPress, style }) => {
  // let RenderIcon;
  // switch (name) {
  //   case 'grass':
  //     RenderIcon = Grass;
  //     break;
  //   case 'fire':
  //     RenderIcon = Fire;
  //     break;
  //   case 'dragon':
  //     RenderIcon = Dragon;
  //     break;
  //   default:
  //     RenderIcon = Dark;
  // }

  return (
    <TouchableOpacity style={{ ...styles.icon, ...style }} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default IconBtn;
