import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, } from "@react-navigation/native-stack"
import { ScreenNames } from "../constants";
import { LoginScreen } from "../screens/auth";
import { HomeScreen } from "../screens/main/home";

export const AppNavigators : React.FC<any> = () => {
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            
        </NavigationContainer>
    )
}

