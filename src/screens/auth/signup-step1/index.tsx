import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { InputLabel, Button } from 'components';
import { useAuth } from 'contexts';
import { useThemedStyles } from 'hooks';
import { AuthStackParamList } from 'navigation/AuthStack';

import createSignupStep1ScreenStyles from './styles';
import AuthBackground from '../components/authBackground';

type SignupStep1ScreenProps = StackScreenProps<AuthStackParamList, 'SignupStep1'>;

const SignupStep1 = ({ navigation }: SignupStep1ScreenProps) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const styles = useThemedStyles(createSignupStep1ScreenStyles);
  return (
    <AuthBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.loginText}>Create Account</Text>
        <InputLabel label="First Name" />
        <InputLabel label="Last Name" />
        <InputLabel label="Phone Number" />
        <Button title="Next" onPress={() => navigation.navigate('SignupStep2', {})} />
      </ScrollView>
    </AuthBackground>
  );
};

export default SignupStep1;
