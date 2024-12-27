import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { KeyboardAvoidingScrollView } from '../../../components/KeyboardAvoidingScrollView';

const SummaryScreen = () => {
    const router = useRouter();

    return (
        <Container>
            <KeyboardAvoidingScrollView>
                <View className="mb-5">
                    <View className="flex flex-row justify-between items-center mb-5">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="chevron-back-circle-outline" size={28} color="black" />
                        </TouchableOpacity>
                        <Text className="text-3xl font-bold text-gray-900 text-center">
                            Summary
                        </Text>
                        <Ionicons name="chevron-back-circle-outline" size={28} color="black" className="opacity-0" />
                    </View>

                    {/* Sender Info Card */}
                    <View className="bg-white p-4 rounded-lg mb-4">
                        <Text className="text-xl font-bold mb-2">Sender Information</Text>
                        <View className="gap-1">
                            <Text className="text-gray-600">John Doe</Text>
                            <Text className="text-gray-600">123 Business Street</Text>
                            <Text className="text-gray-600">City, State 12345</Text>
                            <Text className="text-gray-600">john@example.com</Text>
                        </View>
                    </View>

                    {/* Recipient Info Card */}
                    <View className="bg-white p-4 rounded-lg mb-4">
                        <Text className="text-xl font-bold mb-2">Recipient Information</Text>
                        <View className="gap-1">
                            <Text className="text-gray-600">Jane Smith</Text>
                            <Text className="text-gray-600">456 Client Avenue</Text>
                            <Text className="text-gray-600">City, State 67890</Text>
                            <Text className="text-gray-600">jane@example.com</Text>
                        </View>
                    </View>

                    {/* Invoice Details Card */}
                    <View className="bg-white p-4 rounded-lg mb-4">
                        <Text className="text-xl font-bold mb-2">Invoice Details</Text>
                        <View className="gap-1">
                            <Text className="text-gray-600">Invoice #: INV-2023-001</Text>
                            <Text className="text-gray-600">Date: {new Date().toLocaleDateString()}</Text>
                            <Text className="text-gray-600">Due Date: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</Text>
                        </View>
                    </View>

                    {/* Items Card */}
                    <View className="bg-white p-4 rounded-lg mb-4">
                        <Text className="text-xl font-bold mb-2">Items</Text>
                        <View className="gap-3">
                            {/* Header row */}
                            <View className="flex-row justify-between mb-2">
                                <Text className="font-semibold flex-1">Item</Text>
                                <Text className="font-semibold w-16 text-right">Qty</Text>
                                <Text className="font-semibold w-20 text-right">Price</Text>
                                <Text className="font-semibold w-20 text-right">Total</Text>
                            </View>

                            {/* Item rows */}
                            <View className="border-b border-gray-200 pb-2">
                                <View className="flex-row justify-between items-center">
                                    <View className="flex-1">
                                        <Text className="font-semibold">Example Item</Text>
                                        <Text className="text-gray-600 text-sm">Example description</Text>
                                    </View>
                                    <Text className="w-16 text-right">1</Text>
                                    <Text className="w-20 text-right">$100.10</Text>
                                    <Text className="w-20 text-right">$100.10</Text>
                                </View>
                            </View>

                            <View className="border-b border-gray-200 pb-2">
                                <View className="flex-row justify-between items-center">
                                    <View className="flex-1">
                                        <Text className="font-semibold">Example Item 2</Text>
                                        <Text className="text-gray-600 text-sm">Example description 2</Text>
                                    </View>
                                    <Text className="w-16 text-right">2</Text>
                                    <Text className="w-20 text-right">$200.50</Text>
                                    <Text className="w-20 text-right">$401.00</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Totals Card */}
                    <View className="bg-white p-4 rounded-lg mb-4">
                        <Text className="text-xl font-bold mb-2">Totals</Text>
                        <View className="gap-2">
                            <View className="flex-row justify-between">
                                <Text className="text-gray-600">Subtotal</Text>
                                <Text className="text-gray-600">$501.10</Text>
                            </View>
                            <View className="flex-row justify-between">
                                <Text className="text-gray-600">Tax (10%)</Text>
                                <Text className="text-gray-600">$50.11</Text>
                            </View>
                            <View className="flex-row justify-between mt-2">
                                <Text className="font-bold text-lg">Total</Text>
                                <Text className="font-bold text-lg">$551.21</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingScrollView>

            <Button
                title="Generate Invoice"
                className="mt-5 w-5/6 mx-auto mb-5"
                onPress={() => {
                    // Handle invoice generation
                }}
            />
        </Container>
    );
};

export default SummaryScreen;
