/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
};

export default App;
