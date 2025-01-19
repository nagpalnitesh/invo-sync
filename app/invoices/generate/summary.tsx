import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Card from '~/components/Card';
import { Invoice } from '~/schema/invoice';
import { useStore } from '~/store/store';
import { generateInvoicePDF } from '~/utils/pdf';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { KeyboardAvoidingScrollView } from '../../../components/KeyboardAvoidingScrollView';

const SummaryScreen = () => {
    const router = useRouter();
    const invoice = useStore(data => data.newInvoice) as Invoice;
    const subtotal = useStore(data => data.getSubTotal());
    const total = useStore(data => data.getTotal());


    const formatNumber = (number: number) => {
        return new Intl.NumberFormat('en-US', {
            minimumIntegerDigits: 2,
        }).format(number);
    }

    return (
        <Container>
            <KeyboardAvoidingScrollView>
                <View className="mb-5 gap-2 p-2">
                    <View className="flex flex-row justify-between items-center mb-5">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" />
                        </TouchableOpacity>
                        <Text className="text-3xl font-bold text-dark text-center">
                            Summary
                        </Text>
                        <Ionicons name="chevron-back-circle-outline" size={28} color="#071739" className="opacity-0" />
                    </View>

                    {/* Invoice Details Card */}
                    {invoice.invoice && (
                        <>
                            <Text className="text-xl font-bold text-gray-600 uppercase px-4 pb-2">Invoice Details</Text>
                            <Card className="bg-light mb-4">
                                <View className="gap-1">
                                    <Text className="text-dark text-lg">Invoice #: {invoice.invoice.invoiceNumber}</Text>
                                    <Text className="text-dark text-lg">Date: {invoice.invoice.date}</Text>
                                    <Text className="text-dark text-lg">Due Date: {invoice.invoice.dueDate}</Text>
                                </View>
                            </Card>
                        </>
                    )}

                    {/* Sender Info Card */}
                    {invoice.sender && (
                        <>
                            <Text className="text-xl font-bold text-gray-600 uppercase px-4 pb-2">Sender Information</Text>
                            <Card className="bg-light mb-4">
                                <View className="gap-1">
                                    <Text className="text-dark text-lg">{invoice.sender.senderName}</Text>
                                    <Text className="text-dark text-lg">{invoice.sender.phone}</Text>
                                    <Text className="text-dark text-lg">{invoice.sender.address}</Text>
                                    <Text className="text-dark text-lg">{invoice.sender.email}</Text>
                                    <Text className="text-dark text-lg">{invoice.sender.taxId}</Text>
                                </View>
                            </Card>
                        </>
                    )}

                    {/* Recipient Info Card */}
                    {invoice.recipient && (
                        <>
                            <Text className="text-xl font-bold text-gray-600 uppercase px-4 pb-2">Recipient Information</Text>
                            <Card className="bg-light mb-4">
                                <View className="gap-1">
                                    <Text className="text-dark text-lg">{invoice.recipient.senderName}</Text>
                                    <Text className="text-dark text-lg">{invoice.recipient.phone}</Text>
                                    <Text className="text-dark text-lg">{invoice.recipient.address}</Text>
                                    <Text className="text-dark text-lg">{invoice.recipient.email}</Text>
                                    <Text className="text-dark text-lg">{invoice.recipient.taxId}</Text>
                                </View>
                            </Card>
                        </>
                    )}

                    {/* Items Card */}
                    <Text className="text-xl font-bold text-gray-600 uppercase px-4 pb-2">Items</Text>
                    <Card className="bg-light mb-4">
                        <View className="gap-3">
                            {/* Header row */}
                            <View className="flex-row justify-between mb-2">
                                <Text className="font-semibold text-lg flex-1">Item</Text>
                                <Text className="font-semibold text-lg w-16 text-center">Qty</Text>
                                <Text className="font-semibold text-lg w-20 text-center">Price</Text>
                                <Text className="font-semibold text-lg w-20 text-center">Total</Text>
                            </View>

                            {/* Item rows */}
                            {invoice.items && Array.isArray(invoice.items) && invoice.items.map((item, index) => (
                                <View className="border-b border-gray-200 pb-2" key={index}>
                                    <View className="flex-row justify-between items-center">
                                        <View className="flex-1">
                                            <Text className="font-semibold text-lg">{item.name}</Text>
                                            <Text className="text-gray-500 text-sm">{item.description}</Text>
                                        </View>
                                        <Text className="w-16 text-center text-lg">{formatNumber(item.quantity)}</Text>
                                        <Text className="w-20 text-center text-lg">${(item.price).toFixed(2)}</Text>
                                        <Text className="w-20 text-center text-lg">${(item.price * item.quantity).toFixed(2)}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </Card>

                    {/* Totals Card */}
                    <Text className="text-xl font-bold text-gray-600 uppercase px-4 pb-2">Totals</Text>
                    <Card className="bg-light mb-4">
                        <View className="gap-2">
                            <View className="flex-row justify-between">
                                <Text className="text-dark text-lg">Subtotal</Text>
                                <Text className="text-dark text-lg">${subtotal.toFixed(2)}</Text>
                            </View>
                            <View className="flex-row justify-between mt-2">
                                <Text className="font-bold text-lg">Total</Text>
                                <Text className="font-bold text-lg">${total.toFixed(2)}</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingScrollView>

            <Link href={'/invoices/generate/success'} asChild>
                <Button
                    title="Generate Invoice"
                    className="mt-5"
                />
            </Link>
        </Container>
    );
};

export default SummaryScreen;
