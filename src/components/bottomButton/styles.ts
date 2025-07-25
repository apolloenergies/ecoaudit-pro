import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES } from 'theme';

export default function createBottomButtonStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 32,
      paddingVertical: 24,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: -4 },
      shadowOpacity: 0.16,
      shadowRadius: 16,
      elevation: 8,
    },
  });
}
