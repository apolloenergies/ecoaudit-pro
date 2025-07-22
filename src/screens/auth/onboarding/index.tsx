import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';

import { Button, Icon, CircularButton } from 'components';
import { IMAGES } from 'config';
import { useThemedStyles } from 'hooks';
import { AuthStackParamList } from 'navigation/AuthStack';

import createOnboardingStyles from './styles';

interface OnboardingSlide {
  id: string;
  title: string;
  description: string;
  boldDescription: string;
  image: any;
}

const ONBOARDING_SLIDES: OnboardingSlide[] = [
  {
    id: '1',
    title: 'Welcome to EcoAudit Pro',
    description:
      'Whether it’s a home, apartment, or commercial space, we help you spot inefficiencies and areas for improvement.',
    image: IMAGES.ONBOARDING_IMAGES.OnboardingStep1,
    boldDescription: 'Get a clear view of how your building consumes energy.',
  },
  {
    id: '2',
    title: 'Smart Energy Monitoring',
    description:
      'We’ll show you what to upgrade, which systems to install, and how to do it right for real energy savings.',
    image: IMAGES.ONBOARDING_IMAGES.OnboardingStep2,
    boldDescription: 'Receive expert recommendations tailored to your property type. ',
  },
  {
    id: '3',
    title: 'Save Money & Environment',
    description:
      'Lower energy bills, reduce waste, and boost comfort or operational efficiency—no matter the size or purpose of your property.',
    image: IMAGES.ONBOARDING_IMAGES.OnboardingStep3,
    boldDescription: 'Make meaningful improvements that pay off.',
  },
];
type OnboardingScreenProps = StackScreenProps<AuthStackParamList, 'Onboarding'>;

export default function Onboarding({ navigation }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const styles = useThemedStyles(createOnboardingStyles);

  const handleNext = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (isLastSlide) {
      navigation.popToTop();
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const isLastSlide = currentSlide === ONBOARDING_SLIDES.length - 1;
  const isFirstSlide = currentSlide === 0;

  return (
    <ImageBackground
      source={ONBOARDING_SLIDES[currentSlide].image}
      style={styles.image}
      resizeMode="stretch"
    >
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>
          <Text style={[styles.title]}>{ONBOARDING_SLIDES[currentSlide].title}</Text>
          <Text style={styles.description}>
            <Text style={styles.bold}>{ONBOARDING_SLIDES[currentSlide].boldDescription}</Text>
            {ONBOARDING_SLIDES[currentSlide].description}
          </Text>
        </View>

        <View style={styles.pagination}>
          {ONBOARDING_SLIDES.map((_, index) => (
            <View key={index} style={[styles.dot, index === currentSlide && styles.activeDot]} />
          ))}
        </View>
        <View style={styles.navigation}>
          {!isFirstSlide && (
            <CircularButton
              onPress={handlePrevious}
              icon={{ family: 'AntDesign', name: 'arrowleft' }}
              size={40}
              variant="secondary"
            />
          )}

          <Button
            title="Continue"
            onPress={handleNext}
            style={styles.nextButton}
            rightIcon={
              !isLastSlide ? <Icon family="AntDesign" name="arrowright" color="white" /> : undefined
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
