import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from 'contexts/AuthContext';
import AuthStack from './AuthStack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
