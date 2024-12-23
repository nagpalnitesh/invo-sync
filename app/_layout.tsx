import { StatusBar } from 'expo-status-bar';
import '../global.css';

import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout() {
  return (
    <>
      <Stack>
        <StatusBar style="inverted" />
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='invoices/generate' options={{headerShown: false}} />
      </Stack>
    </>
  );
}
