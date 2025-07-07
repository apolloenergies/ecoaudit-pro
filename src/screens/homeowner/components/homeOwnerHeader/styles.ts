import { StyleSheet } from 'react-native';

import { THEME_TYPES, COLORS, TYPOGRAPHY } from 'theme';

const createHeaderStyles = (theme: THEME_TYPES.ColorPalette) => {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.cleanBlue,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    leftButton: {
      width: 80,
    },
    leftButtonAvatar: {
      flexShrink: 1,
    },
    title: {
      flex: 2,
      textAlign: 'center',
      color: 'white',
      ...TYPOGRAPHY.h5,
      justifyContent: 'center',
    },
    rightButtons: {
      flexDirection: 'row',
      gap: 22,
      width: 80,
      justifyContent: 'flex-end',
    },
    containerAndroid: {
      paddingTop: 10,
    },
  });
};

export default createHeaderStyles;
