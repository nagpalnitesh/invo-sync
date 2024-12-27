import '../global.css';

import { Stack } from 'expo-router';
import React from 'react';


export default function RootLayout() {
  return (
    <>
      {/* <StatusBar backgroundColor='red' style="dark" /> */}
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='invoices/generate' options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
