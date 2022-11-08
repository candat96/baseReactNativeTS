import { View, Text } from 'react-native'
import React from 'react'
import { LoginScreen } from './screens/auth'
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <LoginScreen></LoginScreen>
      </View>
    </Provider>
  )
}

export default App