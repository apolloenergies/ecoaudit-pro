import React from 'react'
import { Image, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import createHeaderAuthStyles from './styles'
import { useThemedStyles } from 'hooks/useThemedStyles'
import { IMAGES } from 'config'
import { useLogoPosition } from 'hooks/useLogoPosition'

export default function HeaderAuth() {
  const styles = useThemedStyles(createHeaderAuthStyles)

  const { top, left, size } = useLogoPosition();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <Image
          style={[styles.image, { 
            width: size,
            height: size,
            top,
            left
          }]}
          source={IMAGES.SPLASH_IMAGES.LOGO_AE}
        />
    </SafeAreaView>
  )
}
