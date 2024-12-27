import { Stack } from 'expo-router';
import React from 'react';

const GenerateInvoiceLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='recipient' options={{ headerShown: false }} />
      <Stack.Screen name='invoice-info' options={{ headerShown: false }} />
      <Stack.Screen name='items' options={{ headerShown: false }} />
      <Stack.Screen name='summary' options={{ headerShown: false }} />
    </Stack>
  )
};

export default GenerateInvoiceLayout;
