import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icons } from 'components';
import { CONSTANTS } from 'config';
import { useThemedStyles } from 'hooks';

import createHeaderStyles from './styles';

export default function HomeOwnerHeader({ navigation, route, options }: StackHeaderProps) {
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles(createHeaderStyles);
  const title = options.title ?? route.name;
  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS === 'ios' ? insets.top : styles.containerAndroid.paddingTop },
      ]}
    >
      <View style={styles.leftButton}>
        <TouchableOpacity onPress={() => {}} style={styles.leftButtonAvatar}>
          <Icons.AvatarIcon />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.rightButtons}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search" size={CONSTANTS.ICONS.ICON_SIZE} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Ionicons name="menu" size={CONSTANTS.ICONS.ICON_SIZE} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
