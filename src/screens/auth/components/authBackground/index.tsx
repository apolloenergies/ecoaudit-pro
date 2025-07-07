import React, { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS } from 'theme';

export default function AuthBackground({ children }: PropsWithChildren) {
  return (
    <LinearGradient
      colors={[COLORS.authGradient1, COLORS.authGradient2, COLORS.authGradient3]}
      locations={[0, 0.3894, 1]}
      style={styles.background}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
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
