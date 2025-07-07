import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import HomeOwnerStack from './HomeOwnerNavigator';

export type MainDrawerParamList = {
  HomeOwner: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeOwner" component={HomeOwnerStack} />
    </Drawer.Navigator>
  );
}
