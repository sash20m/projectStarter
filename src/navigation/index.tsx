import HomeStack from './home/HomeStack';
import AuthStack from './auth/AuthStack';
import FlashMessage from 'react-native-flash-message';

import React from 'react';
import {StatusBar} from 'react-native';

export type StackParamList = {
  Home: undefined;
  Settings: undefined;
};

const Navigation = () => {
  const isUserLogged = true;

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />

      {isUserLogged ? <HomeStack /> : <AuthStack />}

      <FlashMessage position="top" />
    </>
  );
};

export default Navigation;
