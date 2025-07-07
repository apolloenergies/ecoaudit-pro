import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createRadioStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    optionsContainer: {
      gap: 16,
    },
    optionItem: {
      backgroundColor: 'white',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.neutral[200],
      paddingHorizontal: 16,
      paddingVertical: 6,
      minHeight: 48,
    },
    optionItemSelected: {
      backgroundColor: 'rgba(51, 72, 255, 0.08)',
      borderColor: COLORS.cleanBlue,
    },
    optionItemDisabled: {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    optionContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },
    optionText: {
      flex: 1,
      marginRight: 16,
    },
    optionLabel: {
      ...TYPOGRAPHY.base,
      color: theme.neutral[900],
      marginBottom: 2,
    },
    optionDescription: {
      ...TYPOGRAPHY.sm,
      color: theme.neutral[600],
    },
    // Radio button styles
    radioButton: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.neutral[400],
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    radioButtonSelected: {
      borderColor: COLORS.cleanBlue,
    },
    radioButtonInner: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: COLORS.cleanBlue,
    },
    // Checkbox styles
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: theme.neutral[400],
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    checkboxSelected: {
      borderColor: COLORS.cleanBlue,
      backgroundColor: COLORS.cleanBlue,
    },
  });
}
