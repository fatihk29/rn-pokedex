import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// project imports
import { APP_ROUTER } from './APP_ROUTER';
import MainPage from '../screen/MainPage';
import DetailPage from '../screen/DetailPage';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APP_ROUTER.SCREEN.MAIN_PAGE.path} component={MainPage} />
      <Stack.Screen name={APP_ROUTER.SCREEN.DETAIL_PAGE.path} component={DetailPage} />
    </Stack.Navigator>
  );
};

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
