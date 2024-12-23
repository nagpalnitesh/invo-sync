import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className='flex-1 bg-zinc-900/2'>{children}</SafeAreaView>;
};
