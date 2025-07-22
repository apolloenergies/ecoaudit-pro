import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

export default function createOnboardingStyles(theme: THEME_TYPES.ColorPalette) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    skipText: {
      ...TYPOGRAPHY.base,
      color: theme.neutral[600],
      fontWeight: '500',
    },
    content: {
      flexGrow: 1,
      paddingHorizontal: 32,
      marginTop: '50%',
    },
    image: {
      flex: 1,
    },
    textContainer: {
      marginBottom: 40,
    },
    title: {
      ...TYPOGRAPHY.h3,
      color: COLORS.white,
      textAlign: 'left',
      marginBottom: '100%',
      fontWeight: '200',
    },
    description: {
      ...TYPOGRAPHY.base,
      color: COLORS.white,
      textAlign: 'left',
    },
    bold: {
      ...TYPOGRAPHY.semibold,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.neutral[300],
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: COLORS.cleanBlue,
      width: 24,
      borderRadius: 4,
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    navButton: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.neutral[100],
      justifyContent: 'center',
      alignItems: 'center',
    },
    navButtonDisabled: {
      backgroundColor: theme.neutral[50],
    },
    nextButton: {
      flex: 1,
      marginLeft: 16,
    },
  });
}
