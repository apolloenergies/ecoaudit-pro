import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

import { InputLabel, Button } from 'components';
import { useAuth } from 'contexts';
import { useThemedStyles } from 'hooks';
import { AuthStackParamList } from 'navigation/AuthStack';

import createSignupStep2ScreenStyles from './styles';
import AuthBackground from '../components/authBackground';

type SignupStep1ScreenProps = StackScreenProps<AuthStackParamList, 'SignupStep2'>;

const SignupStep2 = ({ navigation }: SignupStep1ScreenProps) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const styles = useThemedStyles(createSignupStep2ScreenStyles);
  return (
    <AuthBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.loginText}>Create Account</Text>
        <InputLabel label="Email" />
        <InputLabel label="Password" />
        <InputLabel label="Confirm Password" />
        <Button title="Next" onPress={() => navigation.navigate('SignupStep3', {})} />
      </ScrollView>
    </AuthBackground>
  );
};

export default SignupStep2;
