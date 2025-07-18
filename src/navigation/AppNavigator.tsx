import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAuth } from 'contexts/AuthContext';

import AuthStack from './AuthStack';
import MainDrawer from './MainDrawerNavigator';

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return <NavigationContainer>{isLoggedIn ? <MainDrawer /> : <AuthStack />}</NavigationContainer>;
};

export default AppNavigator;
