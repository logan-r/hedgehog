import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '../styles'

/**
 * An arrow that when pressed takes user back to last page
 */
export default function BackArrow() {
    const navigation = useNavigation()

    return (
        <Text onPress={navigation.goBack} style={{paddingBottom: 12}}>
            <AntDesign name="arrowleft" size={28} color={Colors.grey70} />
        </Text>
    )
}