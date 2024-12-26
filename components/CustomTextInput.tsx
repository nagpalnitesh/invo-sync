import React from "react";
import { useController } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

type CustomTextInputProps = {
    name: string;
    label: string;
} & TextInputProps

export default function CustomTextInput({ label, name, ...props }: CustomTextInputProps) {
    const { field: { value, onBlur, onChange }, fieldState: { error } } = useController({ name, rules: { required: `${label} is required` } });
    return (
        <>
            <View className="gap-2">
                <Text className="text-base font-semibold text-gray-700">
                    {label}
                </Text>
                <TextInput {...props}
                    placeholderTextColor="#6B7280"
                    className="w-full bg-white border border-gray-300 rounded-lg p-4 text-gray-900 focus:border-gray-900"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                />
                <Text className="text-sm text-red-500">
                    {error?.message}
                </Text>
            </View>
        </>
    );
}