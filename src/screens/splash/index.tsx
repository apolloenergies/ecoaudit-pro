import React, { useEffect } from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  Easing,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

import { IMAGES } from 'config';
import { useLogoPosition } from 'hooks';
import AuthBackground from 'screens/auth/components/authBackground';
import { COLORS } from 'theme';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

type AnimatedSplashProps = {
  onFinish: () => void;
  delay?: number;
};

export default function AnimatedSplash({ onFinish, delay = 800 }: AnimatedSplashProps) {
  const phase = useSharedValue(0);

  const { top: FINAL_TOP, left: FINAL_LEFT, size: FINAL_SIZE } = useLogoPosition();

  const INITIAL_SIZE = 189;
  const DROP_DISTANCE = 30;

  useEffect(() => {
    if (FINAL_TOP === 0) return;
    let mounted = true;
    const timer = setTimeout(() => {
      phase.value = withTiming(
        0.5,
        { duration: 600, easing: Easing.out(Easing.cubic) },
        (finished1) => {
          if (finished1 && mounted) {
            phase.value = withTiming(
              1,
              { duration: 450, easing: Easing.out(Easing.cubic) },
              (finished2) => {
                if (finished2 && mounted) {
                  phase.value = withTiming(
                    2,
                    { duration: 550, easing: Easing.out(Easing.cubic) },
                    (finished3) => {
                      if (finished3 && mounted) {
                        runOnJS(onFinish)();
                      }
                    },
                  );
                }
              },
            );
          }
        },
      );
    }, delay);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [delay, onFinish, phase, FINAL_TOP]);

  const splashStyle = useAnimatedStyle(() => {
    const translateY = interpolate(phase.value, [0, 0.5], [0, SCREEN_HEIGHT], Extrapolation.CLAMP);
    return { transform: [{ translateY }] };
  });

  const logoStyle = useAnimatedStyle(() => {
    const dropY = interpolate(phase.value, [0.5, 1], [-DROP_DISTANCE, 0], Extrapolation.CLAMP);
    const t = interpolate(phase.value, [1, 2], [0, 1], Extrapolation.CLAMP);

    const startTop = (SCREEN_HEIGHT - INITIAL_SIZE) / 2 + dropY;
    const startLeft = (SCREEN_WIDTH - INITIAL_SIZE) / 2;

    const top = interpolate(t, [0, 1], [startTop, FINAL_TOP], Extrapolation.CLAMP);
    const left = interpolate(t, [0, 1], [startLeft, FINAL_LEFT], Extrapolation.CLAMP);
    const size = interpolate(t, [0, 1], [INITIAL_SIZE, FINAL_SIZE], Extrapolation.CLAMP);

    const opacity = phase.value >= 0.5 ? 1 : 0;

    return {
      position: 'absolute',
      top,
      left,
      width: size,
      height: size,
      opacity,
      zIndex: 101,
    };
  });

  return (
    <AuthBackground>
      <Animated.View style={[styles.splash, splashStyle]} pointerEvents="none" />
      <Animated.Image
        source={IMAGES.SPLASH_IMAGES.LOGO_AE}
        style={logoStyle}
        resizeMode="contain"
      />
    </AuthBackground>
  );
}

const styles = StyleSheet.create({
  splash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.cleanBlue,
    zIndex: 100,
  },
});
