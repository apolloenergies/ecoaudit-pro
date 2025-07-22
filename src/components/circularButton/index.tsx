import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

import { CONSTANTS } from 'config';
import { useThemedStyles } from 'hooks';

import createCircularButtonStyles from './styles';
import Icon, { IconProps } from '../icon';

export interface CircularButtonProps {
  title?: string;
  onPress: () => void;
  icon?: Omit<IconProps<any>, 'size' | 'color' | 'style'>;
  iconSize?: number;
  size?: number;
  disabled?: boolean;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function CircularButton({
  title,
  onPress,
  icon,
  iconSize = CONSTANTS.ICONS.ICON_SIZE,
  size = 56,
  disabled = false,
  style,
  variant = 'primary',
}: CircularButtonProps) {
  const styles = useThemedStyles(createCircularButtonStyles);

  const buttonStyle = [
    styles.button,
    styles[variant],
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    disabled && styles.disabled,
    style,
  ];

  const iconColor = disabled
    ? styles.disabledIcon.color
    : styles[`${variant}Icon`]?.color || styles.primaryIcon.color;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled} activeOpacity={0.7}>
      {icon && <Icon family={icon.family} name={icon.name} size={iconSize} color={iconColor} />}
      {title && (
        <Text style={[styles.text, styles[`${variant}Text`], disabled && styles.disabledText]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
