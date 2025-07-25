import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Button, Icon } from 'components';
import { IconProps } from 'components/icon';
import { useThemedStyles } from 'hooks';

import createBottomButtonStyles from './styles';

export interface BottomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  rightIcon?: {
    family: IconProps<any>['family'];
    name: IconProps<any>['name'];
    size?: number;
    color?: string;
  };
  style?: ViewStyle;
  buttonStyle?: ViewStyle;
}

export default function BottomButton({
  title,
  onPress,
  disabled = false,
  rightIcon,
  style,
  buttonStyle,
}: BottomButtonProps) {
  const styles = useThemedStyles(createBottomButtonStyles);

  return (
    <View style={[styles.container, style]}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        rightIcon={
          rightIcon ? (
            <Icon
              family={rightIcon.family}
              name={rightIcon.name}
              size={rightIcon.size || 24}
              color={rightIcon.color}
            />
          ) : undefined
        }
        style={buttonStyle}
      />
    </View>
  );
}
