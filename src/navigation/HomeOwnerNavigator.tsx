import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AuditSelectionScreen from 'screens/homeowner/audit-selection';
import HomeOwnerHeader from 'screens/homeowner/components/homeOwnerHeader';
import HomeScreen from 'screens/homeowner/home';
import TermsAndConditionsScreen from 'screens/homeowner/terms-and-conditions';

export type HomeOwnerStackParamList = {
  Home: undefined;
  AuditSelection: undefined;
  TermsAndConditions: undefined;
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
      <Stack.Group screenOptions={{ title: 'Energy Audit' }}>
        <Stack.Screen name="AuditSelection" component={AuditSelectionScreen} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
