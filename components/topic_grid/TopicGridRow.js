import React from 'react'
import { View } from 'react-native'

export default function TopicGridRow(props) {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {props.children}
        </View>
    )
}