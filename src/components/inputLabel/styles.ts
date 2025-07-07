import { StyleSheet } from 'react-native';

import { THEME_TYPES, TYPOGRAPHY, COLORS } from 'theme';

const createInputLabelStyles = (theme: THEME_TYPES.ColorPalette) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      height: 40,
      width: '100%',
      backgroundColor: COLORS.white,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.neutral[200],
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    label: {
      ...TYPOGRAPHY.base,
      marginBottom: 8,
    },
  });

export default createInputLabelStyles;
