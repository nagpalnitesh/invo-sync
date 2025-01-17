import { Stack } from 'expo-router';
import React from 'react';

const Settings = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={ { headerShown: false } } />
            <Stack.Screen name='business-details' options={ { headerShown: false } } />
            <Stack.Screen name='invoice-number' options={ { headerShown: false } } />
            <Stack.Screen name='default-notes' options={ { headerShown: false } } />
        </Stack>
    )
};

export default Settings;
