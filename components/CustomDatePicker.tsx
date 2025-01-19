import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { Pressable, Text, TextInput, TextInputProps, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type CustomDatePickerProps = {
    name: string;
    label: string;
} & TextInputProps

const CustomDatePicker = ({ name, label, ...props }: CustomDatePickerProps) => {
    const { field: { value, onBlur, onChange }, fieldState: { error }
    } = useController({
        name, rules: { required: `${label} is required` }
    });
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        hideDatePicker();
    };

    return (
        <>
            <View className="gap-2">
                {label &&
                    <Text className="font-semibold text-gray-700 text-lg">
                        {label}
                    </Text>
                }
                <Pressable onPress={() => showDatePicker()}>
                    <TextInput
                        className="w-full bg-light border border-gray-200 rounded-lg p-4 text-dark focus:border-dark text-lg leading-tight"
                        value={value ? new Date(value).toLocaleDateString() : 'Select Date'}
                        editable={false}
                    />
                </Pressable>
                <Text className="text-sm text-red-500">
                    {error?.message}
                </Text>
            </View>
            <DateTimePickerModal
                date={value}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date) => {
                    onChange(date);
                    handleConfirm(date);
                }}
                onCancel={() => {
                    hideDatePicker();
                }}
                onHide={onBlur}
            />
        </>
    )
}

export default CustomDatePicker