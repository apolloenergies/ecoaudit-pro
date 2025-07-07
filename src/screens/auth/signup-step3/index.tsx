import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { InputPin, Button } from 'components';
import { useAuth } from 'contexts';
import { useThemedStyles } from 'hooks';
import { AuthStackParamList } from 'navigation/AuthStack';

import createSignupStep3ScreenStyles from './styles';
import AuthBackground from '../components/authBackground';

type SignupStep3ScreenProps = StackScreenProps<AuthStackParamList, 'SignupStep3'>;

const SignupStep3 = ({ navigation }: SignupStep3ScreenProps) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const styles = useThemedStyles(createSignupStep3ScreenStyles);
  return (
    <AuthBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titleText}>Verification Code</Text>
        <Text style={styles.verificationDescription}>
          A 6-digit verification code has been sent to your email, please enter it below to verify
          your email
        </Text>
        <InputPin cellCount={6} onChange={(text: string) => setUsername(text)} value={username} />
        <Button title="Verify" onPress={() => navigation.navigate('SignupStep4')} />
      </ScrollView>
    </AuthBackground>
  );
};

export default SignupStep3;
