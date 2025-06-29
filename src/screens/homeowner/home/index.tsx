import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { useAuth } from 'contexts';
import { HomeOwnerStackParamList } from 'navigation/HomeNavigator';
import { MainDrawerParamList } from 'navigation/MainDrawerNavigator';

type StackProps = StackScreenProps<HomeOwnerStackParamList, 'Home'>;

type DrawerProps = DrawerScreenProps<MainDrawerParamList, 'Home'>;

type HomeScreenProps = CompositeScreenProps<StackProps, DrawerProps>;

const HomeScreen = ({}: HomeScreenProps) => {
  const { logout, user } = useAuth();
  const foo = 'double quotes instead of single';
  console.log(foo);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
