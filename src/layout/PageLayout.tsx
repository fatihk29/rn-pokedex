import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// project imports
import { COLORS } from '../theme';

const PageLayout: FC<any> = ({ children, bgColor }) => {
  return (
    <SafeAreaView
      style={[style.container, { backgroundColor: bgColor ? bgColor : COLORS.background }]}>
      {children}
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});

export default PageLayout;
