import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from "../styles"

const TabBar = ({ state, descriptors, navigation, activeTintColor, inactiveTintColor }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options

    if (focusedOptions.tabBarVisible === false) {
        return null
    }
  
    return (
        <View style={styles.tabBar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const label =
                    options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name

                const isFocused = state.index === index

                const tintColor = isFocused ? activeTintColor : inactiveTintColor

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                return (
                    <TouchableOpacity
                        key={index}    
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.tabButton}
                    >
                        {options.tabBarIcon({ route, focused: isFocused, color: tintColor, size: 26 })}
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        height: 64,
        elevation: 9,
        paddingHorizontal: '15%'
    },
    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TabBar