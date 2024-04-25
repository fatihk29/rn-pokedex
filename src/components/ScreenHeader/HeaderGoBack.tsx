import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// project imports

// import ArrowLeftPress from '../Pressable/ArrowLeftPress';
import { COLORS } from '../../theme';
import { APP_ROUTER } from '../../navigation/APP_ROUTER';

interface IScreenHeader {
  title: string;
}

const HeaderGoback: FC<IScreenHeader> = ({ title }) => {
  const navigation = useNavigation() as any;

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        {/* <ArrowLeftPress onPress={() => navigation.navigate(APP_ROUTER.SCREEN.main.path)} /> */}
        <Text style={style.title}>{`screen:${title}`}</Text>
      </View>
    </View>
  );
};

export default HeaderGoback;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.main,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 66,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});