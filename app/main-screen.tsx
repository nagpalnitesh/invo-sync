import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Image, Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import '../global.css';
const Main = () => {
    const navigation = useNavigation()
    const form = useForm()
    const onSignup = () => {
        router.push('/authorization/signup')
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <Container>
            <View className='p-2 gap-5 flex-1 justify-center'>
                <View className='gap-2'>
                    <View className='items-center'>
                        <Image source={require('../assets/logo1.png')} className="w-32 h-32"
                            resizeMode="contain" />
                    </View>
                    <View className='gap-2 items-center'>
                        <Text className="text-2xl font-bold text-gray-800">Welcome to InvoSync</Text>
                        <Text className='text-xl text-gray-600'>Create, manage, and share invoices in seconds.</Text>
                    </View>
                </View>
                <View className='w-full'>
                    <Button title='New Invoice' variant='primary' className='mt-auto' onPress={() => navigation.navigate('invoices/generate' as never)} />
                </View>
            </View>
        </Container>
    )
}

export default Main