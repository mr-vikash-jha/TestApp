import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/SignUp';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
