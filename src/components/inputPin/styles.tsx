import { StyleSheet } from 'react-native';

import { THEME_TYPES, TYPOGRAPHY, COLORS } from 'theme';

const createInputPinStyles = (theme: THEME_TYPES.ColorPalette) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    cell: {
      width: 48,
      height: 48,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme.neutral[200],
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    focusCell: {
      borderColor: '#404B5A',
    },
    text: {
      ...TYPOGRAPHY.base,
      color: theme.neutral[900],
    },
  });

export default createInputPinStyles;
