import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen
					name="Login"
					component={LoginPage}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUpPage}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}