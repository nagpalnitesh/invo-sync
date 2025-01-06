import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const IconButton = ({ onPress, children, icon }: { onPress: () => void; children: React.ReactNode; icon: string }) => {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <View className='flex-col items-center'>
                    <View className='relative'>
                        <FontAwesome6 name={icon} size={36} color="#F8FAFC" />
                        <View className='absolute -bottom-1 -right-2 bg-light rounded-full'>
                            <Ionicons name="add-circle-outline" size={15} color="#071739" />
                        </View>
                    </View>
                    <View className='items-center mt-3'>
                        {children}
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default IconButton