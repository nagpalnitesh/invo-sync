import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Card from '~/components/Card';
import { Container } from '~/components/Container';

const DefaultNotes = () => {
    const router = useRouter();
    return (
        <Container>
            <View className="flex flex-row justify-between items-center px-2 pt-2">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" />
                </TouchableOpacity>
                <Text className="text-3xl font-bold text-dark text-center">
                    Default Notes
                </Text>
                <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className="opacity-0" />
            </View>
            <View className="flex-1 px-2 pb-2">
                <View className='p-2 gap-3'>
                    {/* Invoice Default Notes */}
                    <View className="gap-2">
                        <View className="px-4 py-2 flex-row items-center gap-2">
                            <Text className="text-gray-600 font-bold text-lg uppercase">
                                Invoices
                            </Text>
                        </View>
                        <Card className="bg-light p-2 gap-3">
                            <TextInput className="w-full bg-light text-dark text-lg leading-tight min-h-[20vh]" numberOfLines={5} placeholderTextColor="#6B7280" multiline placeholder='Enter default notes here' />
                        </Card>
                    </View>
                    {/* Credit Default Notes */}
                    <View className="gap-2">
                        <View className="px-4 py-2 flex-row items-center gap-2">
                            <Text className="text-gray-600 font-bold text-lg uppercase">
                                Credits
                            </Text>
                        </View>
                        <Card className="bg-light p-2 gap-3">
                            <TextInput className="w-full bg-light text-dark text-lg leading-tight min-h-[20vh]" numberOfLines={5} placeholderTextColor="#6B7280" multiline placeholder='Enter default notes here' />
                        </Card>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default DefaultNotes