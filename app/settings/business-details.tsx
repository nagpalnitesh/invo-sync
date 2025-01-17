import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from '~/components/Card';
import { Container } from '~/components/Container';

const BusinessDetails = () => {
    const router = useRouter();
    return (
        <Container>
            <View className="flex flex-row justify-between items-center px-2 pt-2">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" />
                </TouchableOpacity>
                <Text className="text-3xl font-bold text-dark text-center">
                    Business Details
                </Text>
                <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className="opacity-0" />
            </View>
            <View className="flex-1 px-2 pb-2">
                <View className='p-2 gap-3'>
                    {/* Business Logo */}
                    <Card className="bg-light p-5 gap-5">
                        <View>
                            <Text>Business Logo</Text>
                        </View>
                    </Card>
                    {/* Business Name */}
                    <Card className="bg-light p-5 gap-5">
                        <View className='gap-1'>
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Business Name' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Business Owner Name' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Business Number' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                        </View>
                    </Card>
                    {/* Business Address */}
                    <Card className="bg-light p-5 gap-5">
                        <View className='gap-1'>
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Address Line 1' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Address Line 2' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Address Line 3' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                        </View>
                    </Card>
                    {/* Business Contact */}
                    <Card className="bg-light p-5 gap-5">
                        <View className='gap-1'>
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Email' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Phone' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Mobile' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                            <View className="w-full mx-auto border-b border-gray-900/20" />
                            <TextInput className="w-full bg-light py-4 text-dark text-lg leading-tight" placeholder='Website' autoCapitalize='none'
                                placeholderTextColor="#6B7280" />
                        </View>
                    </Card>
                </View>
            </View>
        </Container>
    )
}

export default BusinessDetails