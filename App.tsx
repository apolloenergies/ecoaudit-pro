import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider, ThemeProvider } from 'contexts';
import { AppNavigator } from 'navigation';
import AnimatedSplash from 'screens/splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const [loaded] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
    SplashScreen.hideAsync();
  }, []);

  const readyToAnimateSplash = loaded;

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          {showSplash && readyToAnimateSplash ? (
            <AnimatedSplash onFinish={handleSplashFinish} />
          ) : (
            <AuthProvider>
              <ThemeProvider>
                <AppNavigator />
              </ThemeProvider>
            </AuthProvider>
          )}
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
