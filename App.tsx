import React from 'react';
import { AuthProvider } from 'contexts';
import { AppNavigator } from 'navigation';

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
