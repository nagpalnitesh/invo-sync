import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useStore } from '~/store/store';

const GenerateInvoiceLayout = () => {
  const startNewInvoice = useStore(data => data.startNewInvoice);
  const invoice = useStore(data => data.newInvoice);

  useEffect(() => {
    if (!invoice) {
      startNewInvoice();
    }
  }, [])

  if (!invoice) {
    return <ActivityIndicator />
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='recipient' options={{ headerShown: false }} />
      <Stack.Screen name='invoice-info' options={{ headerShown: false }} />
      <Stack.Screen name='items' options={{ headerShown: false }} />
      <Stack.Screen name='summary' options={{ headerShown: false }} />
      <Stack.Screen name='success' options={{ headerShown: false }} />
    </Stack>
  )
};

export default GenerateInvoiceLayout;
