import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createAuditCardStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      borderRadius: 16,
      padding: 16,
      shadowColor: '#4B4B4B',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
      elevation: 3,
    },
    content: {
      gap: 24,
    },
    title: {
      ...TYPOGRAPHY.h4,
      color: theme.neutral[900],
      marginBottom: 4,
    },
    description: {
      ...TYPOGRAPHY.sm,
      color: theme.neutral[600],
      lineHeight: 20,
      marginBottom: 8,
    },
    metadata: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    price: {
      ...TYPOGRAPHY.base,
      color: COLORS.cleanBlue,
      fontWeight: '600',
    },
    duration: {
      ...TYPOGRAPHY.sm,
      color: theme.neutral[500],
    },
    arrow: {
      marginLeft: 8,
    },
    arrowIcon: {
      color: theme.neutral[400],
    },
  });
}
