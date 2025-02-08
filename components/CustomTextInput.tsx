import React from "react";
import { useController } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from "react-native";

type CustomTextInputProps = {
    name: string;
    label?: string;
} & TextInputProps

export default function CustomTextInput({ label, name, ...props }: CustomTextInputProps) {
    const { field: { value, onBlur, onChange }, fieldState: { error } } = useController({ name, rules: { required: `${label} is required` } });
    return (
        <>
            <View className="gap-2">
                {label &&
                    <Text className="font-semibold text-gray-700 text-lg">
                        {label}
                    </Text>
                }
                <TextInput {...props}
                    placeholderTextColor="#6B7280"
                    className="w-full bg-light border border-gray-200 rounded-lg p-4 text-dark focus:border-dark text-lg leading-tight"
                    value={value?.toString()}
                    onChangeText={(e) => {
                        let text = parseFloat(e) ? parseFloat(e) : null
                        onChange(props.keyboardType === 'numeric' ? text : e)
                    }}
                    onBlur={onBlur}
                />
                <Text className="text-sm text-red-700">
                    {error?.message}
                </Text>
            </View>
        </>
    );
}