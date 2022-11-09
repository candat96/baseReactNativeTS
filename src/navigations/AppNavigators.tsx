import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { LoginScreen } from "../screens/auth";
import { HomeScreen } from "../screens/main/home";
import { Routers } from "./Routers";

export const AppNavigators : React.FC<any> = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routers.Home} component={HomeScreen}/>
                <Stack.Screen name={Routers.Login} component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

