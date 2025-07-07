import {
  Pressable,
  View,
  Text,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import { useThemedStyles } from 'hooks';

import createButtonStyles from './styles';

type ButtonProps = {
  title?: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'primary' | 'success' | 'danger' | 'dangerLight' | 'secondary' | 'naked';
};

export default function InputLabel({
  onPress,
  title,
  rightIcon,
  disabled,
  leftIcon,
  loading,
  style,
  textStyle,
  variant = 'primary',
}: ButtonProps) {
  const styles = useThemedStyles(createButtonStyles);
  return (
    <Pressable
      style={[
        styles.container,
        styles[`${variant}Container`],
        disabled && styles.nakedContainer,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles[`${variant}TextColor`],
          styles.text,
          disabled && styles.nakedTextColor,
          textStyle,
        ]}
      >
        {title}
      </Text>
      {rightIcon}
    </Pressable>
  );
}
