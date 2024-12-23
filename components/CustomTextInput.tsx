import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

type CustomTextInputProps = {
    label: string;
} & TextInputProps

export default function CustomTextInput({ label, ...props }: CustomTextInputProps) {
    return (
        <>
            <View>
                <Text className="text-base font-semibold text-gray-700 mb-2 px-3">
                    {label}
                </Text>
                <TextInput {...props}
                    placeholderTextColor="#6B7280"
                    className="w-full bg-white border border-gray-300 rounded-lg p-4 text-gray-900 focus:border-red-500 mb-5"
                />
            </View>
        </>
    );
}