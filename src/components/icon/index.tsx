import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

import { CONSTANTS } from 'config';
import { COLORS } from 'theme';

export type IconFamily =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'FontAwesome6'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'
  | 'SimpleLineIcons'
  | 'Zocial';

export type IconName<T extends IconFamily> = T extends 'AntDesign'
  ? keyof typeof AntDesign.glyphMap
  : T extends 'Entypo'
    ? keyof typeof Entypo.glyphMap
    : T extends 'EvilIcons'
      ? keyof typeof EvilIcons.glyphMap
      : T extends 'Feather'
        ? keyof typeof Feather.glyphMap
        : T extends 'FontAwesome'
          ? keyof typeof FontAwesome.glyphMap
          : T extends 'FontAwesome5'
            ? keyof typeof FontAwesome5.glyphMap
            : T extends 'FontAwesome6'
              ? keyof typeof FontAwesome6.glyphMap
              : T extends 'Foundation'
                ? keyof typeof Foundation.glyphMap
                : T extends 'Ionicons'
                  ? keyof typeof Ionicons.glyphMap
                  : T extends 'MaterialCommunityIcons'
                    ? keyof typeof MaterialCommunityIcons.glyphMap
                    : T extends 'MaterialIcons'
                      ? keyof typeof MaterialIcons.glyphMap
                      : T extends 'Octicons'
                        ? keyof typeof Octicons.glyphMap
                        : T extends 'SimpleLineIcons'
                          ? keyof typeof SimpleLineIcons.glyphMap
                          : T extends 'Zocial'
                            ? keyof typeof Zocial.glyphMap
                            : never;

export interface IconProps<T extends IconFamily> {
  family: T;
  name: IconName<T>;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
}

const iconComponents = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} as const;

export default function Icon<T extends IconFamily>({
  family,
  name,
  size = CONSTANTS.ICONS.ICON_SIZE,
  color = COLORS.white,
  style,
}: IconProps<T>) {
  const IconComponent = iconComponents[family];

  return <IconComponent name={name as any} size={size} color={color} style={style} />;
}
