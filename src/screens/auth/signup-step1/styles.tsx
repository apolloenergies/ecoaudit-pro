import { StyleSheet } from 'react-native';
import { THEME_TYPES, TYPOGRAPHY, COLORS } from 'theme';

const createSignupStep1ScreenStyles = (theme: THEME_TYPES.ColorPalette) =>
  StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 100,
        gap: 16
    },
    loginText: {
        ...TYPOGRAPHY.h1,
        marginBottom: 32,
    },
    dontHaveAccountText: {
        ...TYPOGRAPHY['base-medium'],
        color: COLORS.black,
    },
    createAccountText: {
        ...TYPOGRAPHY['base-medium'],
        color: COLORS.cleanBlue,
        textDecorationLine: 'underline',
    },
    createAccountContainer: {
        alignSelf: 'flex-start',
        marginTop: 16,
    }
  });
  
  export default createSignupStep1ScreenStyles;