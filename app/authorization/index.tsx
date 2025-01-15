import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import '../../global.css';

const Login = () => {
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
                        <Image source={require('../../assets/logo1.png')} className="w-32 h-32"
                            resizeMode="contain" />
                    </View>
                    <View className='items-center'>
                        <Text className="text-3xl font-bold text-gray-800">Welcome to InvoSync</Text>
                    </View>
                </View>
                <View className='px-5 py-2 gap-5'>
                    <FormProvider {...form}>
                        <View className='flex-row items-center gap-2 bg-light border border-gray-200 rounded-lg px-2'>

                            <View className='flex-1'>
                                <TextInput className="w-full bg-light p-4 text-dark" placeholder='Enter your registered email' autoCapitalize='none' />
                            </View>
                        </View>
                        <View className='flex-row items-center gap-2 bg-light border border-gray-200 rounded-lg px-2'>
                            <View className='flex-1'>
                                <TextInput className="w-full bg-light p-4 text-dark" placeholder='Enter your password' secureTextEntry={!isPasswordVisible} />
                            </View>
                            <View className=''>
                                {!isPasswordVisible &&
                                    <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                        <Ionicons name="eye" size={24} color="#6B7280" />
                                    </Pressable>}
                                {isPasswordVisible &&
                                    <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                        <Ionicons name="eye-off" size={24} color="#6B7280" />
                                    </Pressable>}
                            </View>
                        </View>
                    </FormProvider>
                </View>
                <View className='flex-row justify-center items-center gap-1'>
                    <Text className='text-xl text-dark font-normal'>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => onSignup()} className=''>
                        <Text className='text-dark text-xl font-bold text-center uppercase'>Signup</Text>
                    </TouchableOpacity>
                </View>
                <View className='w-full'>
                    <Button title='Login' variant='primary' className='mt-auto w-5/6 mx-auto' onPress={() => navigation.navigate('dashboard' as never)} />
                </View>
            </View>
        </Container>
    )
}

export default Login