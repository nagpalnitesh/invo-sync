import Ionicons from '@expo/vector-icons/Ionicons';
import Checkbox from 'expo-checkbox';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Image, Linking, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import '../../global.css';

const Signup = () => {
    const navigation = useNavigation()
    const form = useForm()
    const onSignin = () => {
        router.push('/authorization')
    }

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);

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
                                <TextInput className="w-full bg-light p-4 text-dark text-lg leading-tight" placeholder='Enter your email' autoCapitalize='none'
                                    placeholderTextColor="#6B7280" />
                            </View>
                        </View>
                        <View className='flex-row items-center gap-2 bg-light border border-gray-200 rounded-lg px-2'>
                            <View className='flex-1'>
                                <TextInput className="w-full bg-light p-4 text-dark text-lg leading-tight"
                                    placeholderTextColor="#6B7280" placeholder='Enter your password' secureTextEntry={!isPasswordVisible} />
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

                        <View className='flex-row items-center gap-2 bg-light border border-gray-200 rounded-lg px-2'>

                            <View className='flex-1'>
                                <TextInput className="w-full bg-light p-4 text-dark text-lg leading-tight" placeholder='location' autoCapitalize='none'
                                    placeholderTextColor="#6B7280" />
                            </View>
                        </View>

                        <View className='flex-row gap-3 px-2'>

                            <Checkbox
                                style={styles.roundedCheckbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#071739' : undefined}
                            />
                            <Text className='text-justify w-11/12'>
                                I want to receive calls and emails from Invo Sync and its Affiliates about their products, services, news, events, and promotions. Read our{" "} <Text className='text-blue-600' onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text>.
                            </Text>
                        </View>
                    </FormProvider>
                </View>
                <View className='flex-row justify-center items-center gap-1'>
                    <Text className='text-lg text-dark font-normal'>Already have an account?</Text>
                    <TouchableOpacity onPress={() => onSignin()} className=''>
                        <Text className='text-dark text-lg font-bold text-center'>Login</Text>
                    </TouchableOpacity>
                </View>
                <View className='w-full'>
                    <Button title='Continue' variant='primary' className='mt-auto w-5/6 mx-auto' onPress={() => navigation.navigate('dashboard' as never)} />
                </View>
            </View>
            <View className='p-2 mb-3 w-5/6 m-auto'>
                <Text className='text-base text-center text-dark'>By continuing, your are agreeing to our{" "}
                    <Text className='text-blue-600' onPress={() => Linking.openURL('http://google.com')}>Terms of Use</Text>{" "}and{" "}<Text className='text-blue-600' onPress={() => Linking.openURL('http://google.com')}>Privacy Policy</Text></Text>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    roundedCheckbox: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#0717392e',
    },
});

export default Signup