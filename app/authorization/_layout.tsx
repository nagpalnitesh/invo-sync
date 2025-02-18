import { Stack } from 'expo-router';
import React from 'react';

const Authorization = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='signup' options={{ headerShown: false }} />
        </Stack>
    )
};

export default Authorization;
