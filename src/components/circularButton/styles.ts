import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createCircularButtonStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    primary: {
      backgroundColor: COLORS.cleanBlue,
    },
    secondary: {
      backgroundColor: theme.neutral[100],
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: COLORS.cleanBlue,
    },
    disabled: {
      backgroundColor: theme.neutral[200],
      shadowOpacity: 0,
      elevation: 0,
    },
    text: {
      ...TYPOGRAPHY.base,
      ...TYPOGRAPHY.medium,
      textAlign: 'center',
      marginTop: 2,
    },
    primaryText: {
      color: COLORS.white,
    },
    secondaryText: {
      color: theme.neutral[900],
    },
    outlineText: {
      color: COLORS.cleanBlue,
    },
    disabledText: {
      color: theme.neutral[400],
    },
    primaryIcon: {
      color: COLORS.white,
    },
    secondaryIcon: {
      color: theme.neutral[900],
    },
    outlineIcon: {
      color: COLORS.cleanBlue,
    },
    disabledIcon: {
      color: theme.neutral[400],
    },
  });
}
