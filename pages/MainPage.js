import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import ProfilePage from './main/ProfilePage'
import FeedPage from './main/FeedPage'
import ChallengesPage from './main/ChallengesPage'

const Tab = createBottomTabNavigator()

export default function MainPage() {
	return (
		<Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Feed') {
                        iconName = 'format-list-bulleted'
                    } else if (route.name === 'Challenges') {
                        iconName = 'medal'
                    } else if (route.name === 'Profile') {
                        iconName = 'account-circle'
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} color={color} size={size} />
                }
            })}

            tabBarOptions={{
                activeTintColor: '#cf4327',
                inactiveTintColor: '#a5a9b0',
            }}
        >
            <Tab.Screen name="Feed" component={FeedPage} />
            <Tab.Screen name="Challenges" component={ChallengesPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
	)
}