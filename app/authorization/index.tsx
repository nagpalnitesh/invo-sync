import { router, useNavigation } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import '../../global.css';

const Login = () => {
    const navigation = useNavigation()
    const onSignup = () => {
        router.push('/authorization/signup')
    }
    return (
        <Container>
            <View className='p-2 gap-5'>
                <View className='flex-row justify-center items-center gap-1'>
                    <Text className='text-xl text-dark font-normal'>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => onSignup()} className=''>
                        <Text className='text-dark text-xl font-bold text-center uppercase'>Signup</Text>
                    </TouchableOpacity>
                </View>
                <Button title='Login' variant='primary' className='mt-auto w-5/6 mx-auto' onPress={() => navigation.navigate('dashboard' as never)} />
            </View>
        </Container>
    )
}

export default Login