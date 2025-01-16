import React from 'react'
import { View } from 'react-native'

const Card = (props: { children: React.ReactNode, className?: string }) => {
    return (
        <View className={`rounded-[10px] p-5 shadow-md ${props.className}`}>
            {props.children}
        </View>
    )
}

export default Card