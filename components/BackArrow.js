import React from 'react'
import { Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '../styles'

/**
 * An arrow that when pressed takes user back to last page
 */
export default function BackArrow() {
    const navigation = useNavigation()

    return (
        <Pressable onPress={(navigation.goBack)}>
            {
                ({ pressed }) => (
                    <Text style={{paddingBottom: 12}}>
                        <AntDesign name="arrowleft" size={28} color={pressed ? Colors.autumn : Colors.black90} />
                    </Text>
                )
            }
        </Pressable>
    )
}