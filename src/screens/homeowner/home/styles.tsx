import { StyleSheet } from 'react-native';

import { COLORS, THEME_TYPES, TYPOGRAPHY } from 'theme';

const createHomeScreenStyles = (theme: THEME_TYPES.ColorPalette) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 36,
    },
    titleContainer: {
      flexDirection: 'row',
      gap: 4,
      marginTop: 30,
    },
    titleText: {
      ...TYPOGRAPHY.h3,
    },
    descriptionText: {
      ...TYPOGRAPHY.h5,
      color: theme.neutral[700],
      marginTop: 42,
    },
    image: {
      width: '100%',
      height: 280,
      marginTop: 62,
      resizeMode: 'contain',
    },
    buttonContainer: {
      paddingHorizontal: 32,
      paddingVertical: 24,
      backgroundColor: COLORS.white,
      zIndex: 1,
    },
  });
};

export default createHomeScreenStyles;
