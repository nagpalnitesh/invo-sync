import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Card from '~/components/Card';
import { Container } from '~/components/Container';

const More = () => {
    const router = useRouter();
    return (
        <Container>
            <View className="flex flex-row justify-between items-center px-2 pt-2">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" />
                </TouchableOpacity>
                <Text className="text-3xl font-bold text-dark text-center">
                    Settings
                </Text>
                <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className="opacity-0" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View className="flex-1 px-2 pb-5">
                    <View className="p-2 gap-3">
                        {/* Invoice */}
                        <View className="gap-2">
                            <View className="px-4 py-2 flex-row items-center gap-2">
                                <Text className="text-gray-600 font-bold text-lg uppercase">
                                    Invoice
                                </Text>
                            </View>
                            <Card className="bg-dark p-5 gap-5">
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="business" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Bussiness Details</Text>
                                            <Text className='text-sm text-gray-400'>Logo, Name and Contact Information.</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/invoice-number')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="numbers" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Invoice Number</Text>
                                            <Text className='text-sm text-gray-400'>Invoice Number, Credit Number.</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                                {/* <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="numbers" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Payment Info</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity> */}
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/default-notes')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="notes" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Default Notes</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        {/* Account */}
                        <View className="gap-2">
                            <View className="px-4 py-2 flex-row items-center gap-2">
                                <Text className="text-gray-600 font-bold text-lg uppercase">
                                    Account
                                </Text>
                            </View>
                            <Card className="bg-dark p-5 gap-5">
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <MaterialIcons name="date-range" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Date Format</Text>
                                        </View>
                                    </View>
                                    <View className='gap-3 flex-row items-center'>
                                        <Text className='text-gray-300 text-lg'>DD-MM-YYYY</Text>
                                        <View className="rotate-180">
                                            <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <MaterialIcons name="language" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Language</Text>
                                        </View>
                                    </View>
                                    <View className='gap-3 flex-row items-center'>
                                        <Text className='text-gray-300 text-lg'>English (US)</Text>
                                        <View className="rotate-180">
                                            <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <MaterialIcons name="currency-exchange" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Currency</Text>
                                        </View>
                                    </View>
                                    <View className='gap-3 flex-row items-center'>
                                        <Text className='text-gray-300 text-lg'>INR</Text>
                                        <View className="rotate-180">
                                            <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="percent" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Taxes</Text>
                                            <Text className='text-sm text-gray-400'>Configure Tax Rates, GST Settings.</Text>
                                        </View>
                                    </View>
                                    <View className='gap-3 flex-row items-center'>
                                        {/* <Text className='text-gray-300 text-lg'>INR</Text> */}
                                        <View className="rotate-180">
                                            <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                        {/* Support */}
                        <View className="gap-2">
                            <View className="px-4 py-2 flex-row items-center gap-2">
                                <Text className="text-gray-600 font-bold text-lg uppercase">
                                    Support & Feedback
                                </Text>
                            </View>
                            <Card className="bg-dark p-5 gap-5">
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <FontAwesome name="support" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Help and Support</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                                {/* <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={ () => { console.warn( 'Touch' ) } }>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <FontAwesome name="support" size={ 20 } color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Help and Support</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={ 14 } color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity> */}
                            </Card>
                        </View>
                        {/* Information */}
                        <View className="gap-2">
                            <View className="px-4 py-2 flex-row items-center gap-2">
                                <Text className="text-gray-600 font-bold text-lg uppercase">
                                    Information
                                </Text>
                            </View>
                            <Card className="bg-dark p-5 gap-5">
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => router.push('/settings/business-details')}>
                                    <View className="flex-row gap-2 items-center">
                                        <View>
                                            <MaterialIcons name="info-outline" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">About</Text>
                                        </View>
                                    </View>
                                    <View className='gap-3 flex-row items-center'>
                                        <Text className='text-gray-300 text-lg'>v1.0</Text>
                                        <View className="rotate-180">
                                            <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => Linking.openURL('http://google.com')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <MaterialIcons name="help-outline" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Terms of Use</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                                <View className="w-10/12 mx-auto border-b border-gray-100/25" />
                                <TouchableOpacity className="flex-row justify-between items-center" onPress={() => Linking.openURL('http://google.com')}>
                                    <View className="flex-row gap-2">
                                        <View>
                                            <MaterialIcons name="privacy-tip" size={20} color="#F8FAFC" />
                                        </View>
                                        <View>
                                            <Text className="text-light text-lg font-semibold">Privacy Policy</Text>
                                        </View>
                                    </View>
                                    <View className="rotate-180">
                                        <MaterialIcons name="arrow-back-ios-new" size={14} color="#F8FAFC75" />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View className='w-full'>
                <TouchableOpacity className='flex-row mx-auto items-center w-6/12 justify-center p-4 gap-3'>
                    <MaterialIcons name="logout" size={24} color="#ef4444" />
                    <Text className='text-red-500 text-lg font-bold text-center uppercase'>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default More