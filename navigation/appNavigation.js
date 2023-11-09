import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackView, createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
export default function AppNavigation(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='Home' options={{headerShown:false}} component={HomeScrean}/>

            </stack.Navigator>
        </NavigationContainer>
    )
}