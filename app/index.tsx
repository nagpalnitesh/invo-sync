import { FontAwesome6 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import IconButton from '~/components/IconButton';
// import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className="flex-1">
      <View className="p-2 gap-5">
        <View className="flex-row gap-2 items-center">
          <View className='rotate-90'>
            <Ionicons name="sparkles-sharp" size={30} color="#27272AF2" />
          </View>
          <View>
            <Text className="text-2xl text-gray-900 font-semibold">Welcome, Guest</Text>
            <Text className='text-sm text-gray-900/70 px-1'>Happy Invoicing!</Text>
          </View>
        </View>
        <View className='gap-5 p-2'>
          <View className='bg-white dark:bg-gray-900 rounded-[10px] p-10 shadow-md dark:shadow-lg'>
            <View className='flex-row items-center justify-between'>
              <IconButton icon='file-invoice' onPress={() => navigation.navigate('invoices/generate' as never)}>
                <Text className='text-white font-bold text-lg leading-tight'>New</Text>
                <Text className='text-white font-bold text-lg leading-none'>Invoice</Text>
              </IconButton>

              <IconButton icon='user-large' onPress={() => navigation.navigate('invoices/generate' as never)}>
                <Text className='text-white font-bold text-lg leading-tight'>New</Text>
                <Text className='text-white font-bold text-lg leading-none'>Customer</Text>
              </IconButton>

              <IconButton icon='file-alt' onPress={() => navigation.navigate('invoices/generate' as never)}>
                <Text className='text-white font-bold text-lg leading-tight'>New</Text>
                <Text className='text-white font-bold text-lg leading-none'>Items</Text>
              </IconButton>
            </View>
          </View>

          <View className="bg-white dark:bg-gray-900 rounded-[10px] p-5 shadow-md dark:shadow-lg">
            <View className='flex-row items-center gap-3'>
              <FontAwesome6 name="clock-rotate-left" size={24} color="white" />
              <Text className='text-white font-bold text-lg leading-tight'>Recent Transactions</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
}