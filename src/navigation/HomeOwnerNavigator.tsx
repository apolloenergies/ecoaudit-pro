import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeOwnerHeader from 'screens/homeowner/components/homeOwnerHeader';
import HomeScreen from 'screens/homeowner/home';

export type HomeOwnerStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<HomeOwnerStackParamList>();

export default function HomeOwnerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <HomeOwnerHeader {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
