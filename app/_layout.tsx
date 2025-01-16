import '../global.css';

import 'expo-dev-client';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor='red' style="dark" />
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
