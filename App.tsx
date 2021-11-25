import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {store, persistedStore} from './src/store/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

export default function App() {
  
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
    <NavigationContainer>
      <StatusBar 
      backgroundColor="#000"/>
      <Routes />
    </NavigationContainer>
    </PersistGate>
  </Provider>
  );
}

