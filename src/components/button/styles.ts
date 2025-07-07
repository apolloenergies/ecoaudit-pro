import { StyleSheet } from 'react-native';

import { THEME_TYPES, TYPOGRAPHY, COLORS } from 'theme';

const PRESSED_BUTTON_BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.12)';

const createButtonStyles = (theme: THEME_TYPES.ColorPalette) =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      gap: 8,
      borderRadius: 6,
      alignItems: 'center',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    primaryContainer: {
      backgroundColor: COLORS.cleanBlue,
    },
    successContainer: {
      backgroundColor: COLORS.success,
    },
    dangerContainer: {
      backgroundColor: theme.danger.base,
    },
    dangerLightContainer: {
      backgroundColor: COLORS.dangerLight,
    },
    secondaryContainer: {
      backgroundColor: COLORS.secondary,
    },
    nakedContainer: {
      backgroundColor: COLORS.naked,
    },
    primaryTextColor: {
      color: COLORS.white,
    },
    successTextColor: {
      color: COLORS.white,
    },
    dangerTextColor: {
      color: COLORS.white,
    },
    dangerLightTextColor: {
      color: theme.danger.base,
    },
    secondaryTextColor: {
      color: theme.neutral[900],
    },
    nakedTextColor: {
      color: theme.neutral[900],
    },
    text: {
      ...TYPOGRAPHY['base-medium'],
    },
    pressed: {
      backgroundColor: PRESSED_BUTTON_BACKGROUND_COLOR,
    },
  });

export default createButtonStyles;
