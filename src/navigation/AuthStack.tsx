import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HeaderAuth from 'screens/auth/components/headerAuth';
import LoginScreen from 'screens/auth/login';
import OnboardingScreen from 'screens/auth/onboarding';
import SignupStep1Screen from 'screens/auth/signup-step1';
import SignupStep2Screen from 'screens/auth/signup-step2';
import SignupStep3Screen from 'screens/auth/signup-step3';
import SignupStep4Screen from 'screens/auth/signup-step4';

export type AuthStackParamList = {
  Login: undefined;
  SignupStep1: undefined;
  SignupStep2: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
  };
  SignupStep3: {
    email?: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    password?: string;
  };
  SignupStep4: undefined;
  Onboarding: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderAuth />,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignupStep1" component={SignupStep1Screen} />
      <Stack.Screen name="SignupStep2" component={SignupStep2Screen} />
      <Stack.Screen name="SignupStep3" component={SignupStep3Screen} />
      <Stack.Screen name="SignupStep4" component={SignupStep4Screen} />
      <Stack.Screen
        name="Onboarding"
        options={{ headerShown: false }}
        component={OnboardingScreen}
      />
    </Stack.Navigator>
  );
}
