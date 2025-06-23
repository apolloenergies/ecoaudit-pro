import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/auth/login';
import HeaderAuth from 'screens/auth/components/headerAuth'

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderAuth/>
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
