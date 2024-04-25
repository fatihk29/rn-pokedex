import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// project imports
import PageLayout from '../../layout/PageLayout';
import { APP_ROUTER } from '../../navigation/APP_ROUTER';

const MainPage: FC<any> = () => {
  const navigation = useNavigation() as any;

  return (
    <PageLayout>
      <Text>MainPage</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(APP_ROUTER.SCREEN.DETAIL_PAGE.path);
        }}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </PageLayout>
  );
};

export default MainPage;
