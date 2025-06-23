import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from 'contexts';

const HomeScreen = () => {
  const { logout, user } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
