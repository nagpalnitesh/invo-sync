import '../global.css';

import 'expo-dev-client';
import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';


export default function RootLayout() {
  return (
    <>
      <StatusBar  />
      <Stack>
        <Stack.Screen name='authorization' options={{ headerShown: false }} />
        <Stack.Screen name='settings' options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='dashboard' options={{ headerShown: false }} />
        <Stack.Screen name='invoices/generate' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
