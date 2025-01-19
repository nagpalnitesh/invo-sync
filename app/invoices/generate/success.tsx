import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { router } from 'expo-router'
import { shareAsync } from 'expo-sharing'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, Easing, Text, View } from 'react-native'
import { Button } from '~/components/Button'
import { Container } from '~/components/Container'
import { Invoice } from '~/schema/invoice'
import { useStore } from '~/store/store'
import { generateInvoicePDF } from '~/utils/pdf'

const Success = () => {

    const rotateValue = useRef(new Animated.Value(0)).current;

    const invoice = useStore(data => data.newInvoice) as Invoice;
    const subtotal = useStore(data => data.getSubTotal());
    const total = useStore(data => data.getTotal());

    const [isLoading, setIsLoading] = useState(false);
    const [pdfUri, setPdfUri] = useState('');

    useEffect(() => {
        const startRotation = () => {
            Animated.loop(
                Animated.timing(rotateValue, {
                    toValue: 1,
                    duration: 1000, // Full rotation duration
                    easing: Easing.linear, // Smooth rotation
                    useNativeDriver: true, // Use native driver for better performance
                })
            ).start();
        };

        downloadPDF();
        startRotation();
    }, [rotateValue]);

    const rotateAnimation = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'], // Full circle rotation
    });

    const downloadPDF = async () => {
        setIsLoading(true);
        const uri = await generateInvoicePDF(invoice as Invoice, subtotal, total);
        if (uri) {
            setPdfUri(uri);
        } else {
            console.error('Error generating PDF');
        }
        setIsLoading(false);
    }

    const handleShrePDF = async () => {
        if (!pdfUri) {
            return
        }
        await shareAsync(pdfUri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    return (
        <Container>
            <View className='flex-1 items-center justify-center p-4'>
                {isLoading ? (
                    <View className='items-center gap-4 mb-8'>
                        <Animated.View
                            style={{
                                transform: [{ rotate: rotateAnimation }], // Apply rotation animation
                            }}
                        >
                            <MaterialCommunityIcons name="loading" size={80} color="#071739" />
                        </Animated.View>
                        <Text className='text-dark text-2xl font-bold text-center'>Generating Invoice</Text>
                        <View className='items-center justify-center w-5/6'>
                            <Text className='text-center text-gray-600/70'>Please wait while we generate your invoice.</Text>
                        </View>
                    </View>

                ) : (
                    <View className='items-center gap-4 mb-8'>
                        <MaterialCommunityIcons name="check-circle" size={80} color="#071739" />
                        <Text className='text-dark text-2xl font-bold text-center'>Invoice Generated Successfully</Text>
                        <View className='items-center justify-center w-5/6'>
                            <Text className='text-center text-gray-600/70'>Your invoice has been generated successfully and is ready to be shared with your customers.</Text>
                        </View>
                    </View>
                )}
                <Button title='Share Invoice' variant='primary' onPress={() => handleShrePDF()} />
                <Button title='Back to Home' variant='secondary' onPress={() => router.back()} />
            </View>
        </Container>
    )
}

export default Success