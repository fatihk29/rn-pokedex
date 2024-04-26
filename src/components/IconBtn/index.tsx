import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

// project imports
import { textColor } from '../../theme/Colors';
import GrassSVG from '../../assets/icons/GrassSVG';
import FireSVG from '../../assets/icons/FireSVG';
import DragonSVG from '../../assets/icons/DragonSVG';
import DarkSVG from '../../assets/icons/DarkSVG';

interface IconBtnProps {
  children?: ReactNode;
  onPress?: () => void;
  style?: StyleProp<any>;
  name?: any;
  width?: any;
  height?: any;
}
const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});

const IconBtn: React.FC<IconBtnProps> = ({
  children,
  onPress,
  name,
  style,
  width,
  height,
  ...props
}) => {
  let RenderIcon;
  switch (name) {
    case 'grass':
      RenderIcon = GrassSVG;
      break;
    case 'fire':
      RenderIcon = FireSVG;
      break;
    case 'dragon':
      RenderIcon = DragonSVG;
      break;
    default:
      RenderIcon = DarkSVG;
  }

  return (
    <TouchableOpacity style={{ ...styles.icon, ...style }} onPress={onPress}>
      {name ? <RenderIcon height={height} width={width} color={textColor.white} /> : children}
    </TouchableOpacity>
  );
};

export default IconBtn;
