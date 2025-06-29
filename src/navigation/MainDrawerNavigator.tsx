import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import HomeStack from './HomeNavigator';

export type MainDrawerParamList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<MainDrawerParamList>();

export default function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
  );
}
