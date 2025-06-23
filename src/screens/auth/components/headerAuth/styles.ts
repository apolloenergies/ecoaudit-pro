import { useLogoPosition } from 'hooks';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { THEME_TYPES } from 'theme';

const createHeaderAuthStyles = (theme: THEME_TYPES.ColorPalette) => {

  return StyleSheet.create({
    safeArea: {
        backgroundColor: 'transparent'
    },
    image: {
        position: 'absolute',
    }
  });
}
  
  
  export default createHeaderAuthStyles;