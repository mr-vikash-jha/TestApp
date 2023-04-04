import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppStack from './src/navigation/AppStack';

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
}
