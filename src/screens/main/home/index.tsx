import { Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react'

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routers } from "../../../navigations";

interface HomeProps {
  navigation :NativeStackNavigationProp<any>
  title : string
}

 const HomeScreen :React.FC<HomeProps> = (props : HomeProps) => {

   function handleButton() : void {
     props.navigation.navigate(Routers.Login, { user : "Cấn Văn Đạt" })
   }
  return (
    <View style = {styles.container}>
      <Text>HomeScreen</Text>
        <Pressable style = {styles.button} onPress={handleButton}>
          <Text>Login</Text>
        </Pressable>
    </View>
  )
}
export { HomeScreen }
const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: "center",
    alignItems : "center",
  },
  button : {
    width : 300,
    height :50,
    backgroundColor : "green",
    justifyContent: "center",
    alignItems : "center",
  },
})
