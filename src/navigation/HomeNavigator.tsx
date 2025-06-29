import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from 'screens/homeowner/home';

export type HomeOwnerStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<HomeOwnerStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
