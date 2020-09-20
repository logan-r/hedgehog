import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'

import ProfilePage from './main/ProfilePage'
import FeedPage from './main/FeedPage'
import ChallengesPage from './main/ChallengesPage'

const Tab = createBottomTabNavigator();

export default function MainPage({ navigation, API, currentUser }) {
	return (
		<Tab.Navigator>
            <Tab.Screen name="Feed">{props => <FeedPage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
            <Tab.Screen name="Challenges">{props => <ChallengesPage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
            <Tab.Screen name="Profile">{props => <ProfilePage {...props} API={API} currentUser={currentUser} />}</Tab.Screen>
        </Tab.Navigator>
	)
}