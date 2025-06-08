import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useAuth } from 'contexts';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, padding: 8, marginBottom: 16, width: 200 }}
      />
      <Button title="Login" onPress={() => login(username)} />
    </View>
  );
};

export default LoginScreen;
