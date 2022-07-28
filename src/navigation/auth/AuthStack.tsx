import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../../screens/auth/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen/RegisterScreen';

export type StackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthStack = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
