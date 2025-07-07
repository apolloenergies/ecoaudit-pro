import { StyleSheet } from 'react-native';

import { THEME_TYPES, TYPOGRAPHY } from 'theme';

const createSignupStep4ScreenStyles = (theme: THEME_TYPES.ColorPalette) =>
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
    successImage: {
      width: '100%',
      resizeMode: 'stretch',
      position: 'absolute',
      bottom: 0,
    },
  });

export default createSignupStep4ScreenStyles;
