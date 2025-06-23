import React, { useState, useCallback } from 'react';
import { AuthProvider } from 'contexts';
import { AppNavigator } from 'navigation';
import * as SplashScreen from 'expo-splash-screen';
import AnimatedSplash from 'screens/splash'
import { useFonts } from 'expo-font';
import {SafeAreaProvider} from 'react-native-safe-area-context'

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
    <SafeAreaProvider>
      {
        showSplash && readyToAnimateSplash ? 
          <AnimatedSplash onFinish={handleSplashFinish}  /> : 
          <>
            <AuthProvider>
              <AppNavigator />
            </AuthProvider>
          </>
      }
    </SafeAreaProvider>
  );
}
  