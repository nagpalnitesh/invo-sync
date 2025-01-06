import { FontAwesome6 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import IconButton from "~/components/IconButton";

export default function Dashboard() {
    const navigation = useNavigation()
    return (
        <SafeAreaView className="flex-1">
            <View className="p-2 gap-5">
                <View className="flex-row gap-2 items-center">
                    <View className='rotate-90'>
                        <Ionicons name="sparkles-sharp" size={30} color="#071739" />
                    </View>
                    <View>
                        <Text className="text-2xl text-dark font-semibold">Welcome, Guest</Text>
                        <Text className='text-sm text-dark/70 px-1'>Happy Invoicing!</Text>
                    </View>
                </View>
                <View className='gap-5 p-2'>
                    <View className='bg-light dark:bg-dark rounded-[10px] p-10 shadow-md dark:shadow-lg'>
                        <View className='flex-row items-center justify-between'>
                            <IconButton icon='file-invoice' onPress={() => navigation.navigate('invoices/generate' as never)}>
                                <Text className='text-light font-bold text-lg leading-tight'>New</Text>
                                <Text className='text-light font-bold text-lg leading-none'>Invoice</Text>
                            </IconButton>

                            <IconButton icon='user-large' onPress={() => navigation.navigate('invoices/generate' as never)}>
                                <Text className='text-light font-bold text-lg leading-tight'>New</Text>
                                <Text className='text-light font-bold text-lg leading-none'>Customer</Text>
                            </IconButton>

                            <IconButton icon='file-alt' onPress={() => navigation.navigate('invoices/generate' as never)}>
                                <Text className='text-light font-bold text-lg leading-tight'>New</Text>
                                <Text className='text-light font-bold text-lg leading-none'>Items</Text>
                            </IconButton>
                        </View>
                    </View>

                    <View className="bg-light dark:bg-dark rounded-[10px] p-5 shadow-md dark:shadow-lg gap-5">
                        <View className='flex-row items-center gap-3'>
                            <FontAwesome6 name="clock-rotate-left" size={24} color="#F8FAFC" />
                            <Text className='text-light font-bold text-lg leading-tight'>Recent Transactions</Text>
                        </View>
                        {/* <View className='flex-row gap-5'>
              <View className='rounded-full p-2 px-5 bg-blue-500'>
                <Text className='text-light font-semibold'>Invoices</Text>
              </View>
            </View> */}
                        <View className='items-center justify-center gap-7 py-5'>
                            <View>
                                <Text className='text-light text-lg font-bold text-center'>No invoices recorded yet</Text>
                                <Text className='text-light text-lg font-semibold w-72 text-center mt-2 leading-tight'>Create invoices to start receiving or record payments</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('invoices/generate' as never)} className='rounded-full p-2 px-5 bg-light'>
                                <View className='flex-row gap-2 items-center justify-center'>
                                    <Ionicons name="add-circle-outline" size={20} color="#071739" />
                                    <Text className='text-black text-base font-medium'>New Invoice</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    );
}