import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useAuth } from 'contexts';
import {InputLabel, Button} from 'components'
import { useThemedStyles } from 'hooks';
import createSignupStep1ScreenStyles from './styles';
import AuthBackground from '../components/authBackground';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'navigation/AuthStack';

type SignupStep1ScreenProps = StackScreenProps<AuthStackParamList, 'SignupStep1'>;

const SignupStep1 = ({navigation}: SignupStep1ScreenProps) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const styles = useThemedStyles(createSignupStep1ScreenStyles)
  return (
    <AuthBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.loginText}>Create Account</Text>
        <InputLabel label='First Name' />
        <InputLabel label='Last Name' />
        <InputLabel label='Phone Number' />
        <Button title="Next" onPress={() => navigation.navigate('SignupStep2', {})} />
      </ScrollView>
    </AuthBackground>
  );
};

export default SignupStep1;
