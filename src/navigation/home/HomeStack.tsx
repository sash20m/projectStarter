import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

export type StackParamList = {
  Home: undefined;
  Settings: undefined;
};

const HomeStack = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
