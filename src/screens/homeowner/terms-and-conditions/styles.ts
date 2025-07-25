import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createTermsAndConditionsStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    scrollView: {
      flex: 1,
    },
    contentContainer: {
      paddingTop: 24,
      paddingBottom: 16,
      paddingHorizontal: 32,
    },
    logo: {
      height: 115,
      width: 113,
      marginBottom: 32,
    },
    title: {
      ...TYPOGRAPHY.h3,
      color: COLORS.black,
      marginBottom: 24,
    },
    sectionPadding: {
      paddingLeft: 4,
    },
    sectionTitle: {
      ...TYPOGRAPHY.sm,
      color: theme.neutral[700],
      ...TYPOGRAPHY.bold,
    },
    sectionContent: {
      ...TYPOGRAPHY.sm,
      color: theme.neutral[700],
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingBottom: 24,
      gap: 12,
      borderTopWidth: 1,
      borderTopColor: theme.neutral[200],
      backgroundColor: COLORS.white,
    },
    footerContainer: {
      paddingVertical: 24,
    },
  });
}
