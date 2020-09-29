import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { AntDesign } from '@expo/vector-icons'

import ProfilePage from './main/ProfilePage'
import FeedPage from './main/FeedPage'
import ChallengesPage from './main/ChallengesPage'
import TabBar from '../components/TabBar'
import { Colors } from '../styles'

const Tab = createMaterialTopTabNavigator()

export default function MainTabs() {
	return (
		<Tab.Navigator
            tabBar={TabBar}
            tabBarPosition="bottom"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Feed') {
                        return <AntDesign name="picture" color={color} size={size} />
                    } else if (route.name === 'Challenges') {
                        return <AntDesign name="Trophy" color={color} size={size} />
                    } else if (route.name === 'Profile') {
                        return <AntDesign name="user" color={color} size={size} />
                    }
                }
            })}

            swipeEnabled={true}

            tabBarOptions={{
                activeTintColor: Colors.marigold,
                inactiveTintColor: Colors.black40,
                showIcon: true
            }}
        >
            <Tab.Screen name="Challenges" component={ChallengesPage} />
            <Tab.Screen name="Feed" component={FeedPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
	)
}