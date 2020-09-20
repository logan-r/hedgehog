import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProfilePage from './main/ProfilePage'
import FeedPage from './main/FeedPage'
import ChallengesPage from './main/ChallengesPage'

const Tab = createBottomTabNavigator()

export default function MainPage({ navigation, API, currentUser }) {
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
            <Tab.Screen name="Feed">{props => <FeedPage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
            <Tab.Screen name="Challenges">{props => <ChallengesPage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
            <Tab.Screen name="Profile">{props => <ProfilePage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
        </Tab.Navigator>
	)
}