import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES } from 'theme';

export default function createAuditSelectionStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 24,
      gap: 16,
    },
    bottomContainer: {
      paddingHorizontal: 32,
      paddingVertical: 24,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
