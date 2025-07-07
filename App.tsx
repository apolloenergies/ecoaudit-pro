import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from 'contexts';
import { AppNavigator } from 'navigation';
import AnimatedSplash from 'screens/splash';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
    SplashScreen.hideAsync();
  }, []);

  const readyToAnimateSplash = fontsLoaded;

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          {showSplash && readyToAnimateSplash ? (
            <AnimatedSplash onFinish={handleSplashFinish} />
          ) : (
            <AuthProvider>
              <AppNavigator />
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
