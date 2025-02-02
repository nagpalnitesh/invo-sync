import React, { PropsWithChildren } from 'react';
import {
    KeyboardAvoidingView,
    KeyboardAvoidingViewProps,
    Platform,
    ScrollView,
    ScrollViewProps
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface KeyboardAvoidingScrollViewProps extends PropsWithChildren {
    keyboardAvoidingViewProps?: Omit<KeyboardAvoidingViewProps, 'behavior'>;
    scrollViewProps?: ScrollViewProps;
}

export const KeyboardAvoidingScrollView: React.FC<KeyboardAvoidingScrollViewProps> = ({
    children,
    keyboardAvoidingViewProps,
    scrollViewProps,
}) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
            {...keyboardAvoidingViewProps}
            keyboardVerticalOffset={0}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                {...scrollViewProps}
                contentContainerStyle={{
                    flexGrow: 1,
                    padding: 10,
                    gap: 5,
                }}
                style={{ flex: 1 }}
            >

                <SafeAreaView>
                    {/* <SafeAreaView className='flex-1 bg-zinc-900/2'> */}
                    {children}
                    {/* </SafeAreaView> */}
                </SafeAreaView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
