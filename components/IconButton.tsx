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
                        <FontAwesome6 name={icon} size={36} color="white" />
                        <View className='absolute -bottom-1 -right-2 bg-white rounded-full'>
                            <Ionicons name="add-circle-outline" size={15} color="black" />
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