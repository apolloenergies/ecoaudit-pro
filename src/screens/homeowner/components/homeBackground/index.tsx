import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from 'theme';

export default function HomeBackground({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={[COLORS.homeGradient1, COLORS.homeGradient2]}
      locations={[0.3894, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.background}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
