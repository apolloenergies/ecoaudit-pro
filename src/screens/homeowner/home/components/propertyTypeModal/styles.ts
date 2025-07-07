import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createPropertyTypeModalStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalCard: {
      width: '100%',
      backgroundColor: COLORS.white,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      paddingBottom: 24,
      paddingTop: 12,
      alignItems: 'stretch',
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.09,
      shadowRadius: 12,
      elevation: 8,
    },
    grabber: {
      width: 48,
      height: 5,
      borderRadius: 3,
      backgroundColor: '#E0E0E0',
      alignSelf: 'center',
      marginBottom: 14,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      borderColor: theme.neutral[200],
      borderBottomWidth: 1,
      paddingHorizontal: 11,
      paddingBottom: 21,
      justifyContent: 'center',
    },
    title: {
      ...TYPOGRAPHY.h3,
      color: theme.neutral[900],
    },
    closeButton: {
      position: 'absolute',
      right: 11,
      bottom: 15,
    },
    optionRow: {
      alignItems: 'center',
      paddingVertical: 24,
      paddingHorizontal: 31,
      justifyContent: 'space-between',
      gap: 16,
    },
    continueIcon: {
      color: theme.neutral[900],
    },
  });
}
