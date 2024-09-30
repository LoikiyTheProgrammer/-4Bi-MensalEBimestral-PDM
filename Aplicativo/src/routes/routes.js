import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/home';
import SignIn from '../screens/SignIn/signIn';
import SignUp from '../screens/SignUp/signUp';
import Main from '../screens/Main/main';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Main'
                component={Main}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}