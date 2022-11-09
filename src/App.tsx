import {View, Text} from 'react-native';
import React from 'react';
import { LoginScreen } from './screens/auth';
import { Provider } from 'react-redux';
import { store } from './redux';
import { AppNavigators } from "./navigations";

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigators/>
    </Provider>
  );
};

export default App;
