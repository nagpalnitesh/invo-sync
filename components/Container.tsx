import { Platform, SafeAreaView, StatusBar } from 'react-native';

const safeAreaStyle = {
  flex: 1,
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className='flex-1 bg-zinc-900/2'>
      <StatusBar barStyle={'dark-content'} backgroundColor={'rgba(24, 24, 27, 0.05)'} />
      {children}
    </SafeAreaView>
  );
};
