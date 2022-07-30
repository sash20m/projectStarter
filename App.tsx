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
import {createStore} from 'redux';
import userReducer from './src/redux/reducers/user.reducer';
import {Provider} from 'react-redux';
import indexReducer from './src/redux/reducers/index.reducer';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

const Store = createStore(indexReducer);

const StorePersist = persistStore(Store);

const App = () => {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Provider store={Store}>
          <PersistGate loading={null} persistor={StorePersist}>
            <Navigation />
          </PersistGate>
        </Provider>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
};

export default App;
