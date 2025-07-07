import { StyleSheet } from 'react-native';

import { THEME_TYPES, TYPOGRAPHY } from 'theme';

const createSignupStep3ScreenStyles = (theme: THEME_TYPES.ColorPalette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 32,
      paddingTop: 100,
      gap: 16,
    },
    titleText: {
      ...TYPOGRAPHY.h1,
      marginBottom: 32,
    },
    verificationDescription: {
      ...TYPOGRAPHY.h6,
    },
  });

export default createSignupStep3ScreenStyles;
