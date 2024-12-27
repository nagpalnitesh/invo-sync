import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '~/store/store';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { KeyboardAvoidingScrollView } from '../../../components/KeyboardAvoidingScrollView';

const SummaryScreen = () => {
    const router = useRouter();
    const invoice = useStore(data => data.newInvoice);
    const subtotal = useStore(data => data.getSubTotal());
    const total = useStore(data => data.getTotal());

    return (
        <Container>
            <KeyboardAvoidingScrollView>
                <View className="mb-5 gap-2">
                    <View className="flex flex-row justify-between items-center mb-5">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="chevron-back-circle-outline" size={28} color="black" />
                        </TouchableOpacity>
                        <Text className="text-3xl font-bold text-gray-900 text-center">
                            Summary
                        </Text>
                        <Ionicons name="chevron-back-circle-outline" size={28} color="black" className="opacity-0" />
                    </View>

                    {/* Invoice Details Card */}
                    {invoice.invoice && (
                        <>
                            <Text className="text-xl font-bold mb-2 color-slate-500">Invoice Details</Text>
                            <View className="bg-white p-4 rounded-lg mb-4 shadow shadow-gray-500/30">
                                <View className="gap-1">
                                    <Text className="text-gray-600">Invoice #: {invoice.invoice.invoiceNumber}</Text>
                                    <Text className="text-gray-600">Date: {invoice.invoice.date}</Text>
                                    <Text className="text-gray-600">Due Date: {invoice.invoice.dueDate}</Text>
                                </View>
                            </View>
                        </>
                    )}

                    {/* Sender Info Card */}
                    {invoice.sender && (
                        <>
                            <Text className="text-xl font-bold mb-2 color-slate-500">Sender Information</Text>
                            <View className="bg-white p-4 rounded-lg mb-4 shadow shadow-gray-500/30">
                                <View className="gap-1">
                                    <Text className="text-gray-600">{invoice.sender.senderName}</Text>
                                    <Text className="text-gray-600">{invoice.sender.phone}</Text>
                                    <Text className="text-gray-600">{invoice.sender.address}</Text>
                                    <Text className="text-gray-600">{invoice.sender.email}</Text>
                                    <Text className="text-gray-600">{invoice.sender.taxId}</Text>
                                </View>
                            </View>
                        </>
                    )}

                    {/* Recipient Info Card */}
                    {invoice.recipient && (
                        <>
                            <Text className="text-xl font-bold mb-2 color-slate-500">Recipient Information</Text>
                            <View className="bg-white p-4 rounded-lg mb-4 shadow shadow-gray-500/30">
                                <View className="gap-1">
                                    <Text className="text-gray-600">{invoice.recipient.senderName}</Text>
                                    <Text className="text-gray-600">{invoice.recipient.phone}</Text>
                                    <Text className="text-gray-600">{invoice.recipient.address}</Text>
                                    <Text className="text-gray-600">{invoice.recipient.email}</Text>
                                    <Text className="text-gray-600">{invoice.recipient.taxId}</Text>
                                </View>
                            </View>
                        </>
                    )}

                    {/* Items Card */}
                    <Text className="text-xl font-bold mb-2 color-slate-500">Items</Text>
                    <View className="bg-white p-4 rounded-lg mb-4 shadow shadow-gray-500/30">
                        <View className="gap-3">
                            {/* Header row */}
                            <View className="flex-row justify-between mb-2">
                                <Text className="font-semibold flex-1">Item</Text>
                                <Text className="font-semibold w-16 text-center">Qty</Text>
                                <Text className="font-semibold w-20 text-center">Price</Text>
                                <Text className="font-semibold w-20 text-center">Total</Text>
                            </View>

                            {/* Item rows */}
                            {invoice.items && Array.isArray(invoice.items) && invoice.items.map((item, index) => (
                                <View className="border-b border-gray-200 pb-2" key={index}>
                                    <View className="flex-row justify-between items-center">
                                        <View className="flex-1">
                                            <Text className="font-semibold">{item.name}</Text>
                                            <Text className="text-gray-600 text-sm">{item.description}</Text>
                                        </View>
                                        <Text className="w-16 text-center">{item.quantity}</Text>
                                        <Text className="w-20 text-center">${(item.price).toFixed(2)}</Text>
                                        <Text className="w-20 text-center">${(item.price * item.quantity).toFixed(2)}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Totals Card */}
                    <Text className="text-xl font-bold mb-2 color-slate-500">Totals</Text>
                    <View className="bg-white p-4 rounded-lg mb-4 shadow shadow-gray-500/30">
                        <View className="gap-2">
                            <View className="flex-row justify-between">
                                <Text className="text-gray-600">Subtotal</Text>
                                <Text className="text-gray-600">${subtotal.toFixed(2)}</Text>
                            </View>
                            <View className="flex-row justify-between mt-2">
                                <Text className="font-bold text-lg">Total</Text>
                                <Text className="font-bold text-lg">${total.toFixed(2)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingScrollView>

            <Button
                title="Generate Invoice"
                className="mt-5 w-5/6 mx-auto"
                onPress={() => {
                    // Handle invoice generation
                }}
            />
        </Container>
    );
};

export default SummaryScreen;
