import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent:"center",
    alignItems : "center",
    backgroundColor : "green"
  }
})
export default App