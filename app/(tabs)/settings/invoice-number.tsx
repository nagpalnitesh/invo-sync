import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from '~/components/Card';
import { Container } from '~/components/Container';

const InvoiceNumber = () => {
    const router = useRouter();
    return (
        <Container>
            <View className="flex flex-row justify-between items-center p-2">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" />
                </TouchableOpacity>
                <Text className="text-3xl font-bold text-dark text-center">
                    Invoice Number
                </Text>
                <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className="opacity-0" />
            </View>
            <View className="flex-1 px-2 pb-2">
                <View className='p-2 gap-3'>
                    {/* Business Contact */}
                    <Card className="bg-light p-5 gap-5">
                        <View className='gap-1'>
                            <View className='flex-row items-center justify-between'>
                                <View>
                                    <Text className='text-lg text-dark font-semibold'>Invoice Number:</Text>
                                </View>
                                <View className='flex-1'>
                                    <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight text-right" placeholder='INV000' autoCapitalize='none'
                                        placeholderTextColor="#6B7280" />
                                </View>
                            </View>
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <View className='flex-row items-center justify-between'>
                                <View>
                                    <Text className='text-lg text-dark font-semibold'>Credit Number:</Text>
                                </View>
                                <View className='flex-1'>
                                    <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight text-right" placeholder='CER000' autoCapitalize='none'
                                        placeholderTextColor="#6B7280" />
                                </View>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        </Container>
    )
}

export default InvoiceNumber