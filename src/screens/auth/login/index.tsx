import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useAuth } from 'contexts';
import {InputLabel, Button} from 'components'
import { useThemedStyles } from 'hooks';
import createLoginScreenStyles from './styles';
import AuthBackground from '../components/authBackground';
import {AuthStackParamList } from 'navigation/AuthStack';
import { StackScreenProps } from '@react-navigation/stack';

type LoginScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const styles = useThemedStyles(createLoginScreenStyles)
  return (
    <AuthBackground>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <InputLabel label='Email' />
        <InputLabel label='Password' />
        <Button title="Login" onPress={() => login(username)} />
        <View style={styles.createAccountContainer}>
          <Text style={styles.dontHaveAccountText}>Don't have an account</Text>
          <Text style={styles.createAccountText} onPress={() => navigation.navigate('SignupStep1')}>Create Account</Text>
        </View>
      </ScrollView>
    </AuthBackground>
  );
};

export default LoginScreen;
