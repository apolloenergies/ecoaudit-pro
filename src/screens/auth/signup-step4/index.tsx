import React, { useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import {Button} from 'components'
import { useThemedStyles } from 'hooks';
import createSignupStep3ScreenStyles from './styles';
import AuthBackground from '../components/authBackground';
import {IMAGES} from 'config'
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'navigation/AuthStack';

type SignupStep4ScreenProps = StackScreenProps<AuthStackParamList, 'SignupStep4'>;

const SignupStep4 = ({navigation}: SignupStep4ScreenProps) => {
  const styles = useThemedStyles(createSignupStep3ScreenStyles)
  return (
    <AuthBackground>
      <Image source={IMAGES.SIGNUP_IMAGES.BACKGROUND_CREATE_ACCOUNT_SUCCESS} style={styles.successImage} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleText}>Success</Text>
        <Text style={styles.verificationDescription}>Your email has been successfully verified</Text>
        <View>
        <Button title="Continue" onPress={() => navigation.popToTop()} />
        </View>
      </ScrollView>
    </AuthBackground>
  );
};

export default SignupStep4;
