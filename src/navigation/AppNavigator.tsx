import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'contexts/AuthContext';
import AuthStack from './AuthStack';


const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
