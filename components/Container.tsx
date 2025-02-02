import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

const safeAreaStyle = {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f0f2f2'} />
      <SafeAreaView className='flex-1 bg-zinc-900/2'>
        {children}
      </SafeAreaView>
    </>
  );
};