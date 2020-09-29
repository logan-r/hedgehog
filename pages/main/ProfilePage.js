import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import AuthContext from '../../contexts/AuthContext'
import { Base, Styles, Typography } from '../../styles'

export default function ProfilePage() {
	// Get info on authentication state
	const auth = useContext(AuthContext)

	return (
		<View style={{...Base.pageContainer, justifyContent: 'center', alignItems: 'center'}}>
			<Text style={{...Typography.lg, ...Typography.bodySemiBold}}>{auth.currentUser.email}</Text>
			<Text style={Styles.text}>20 challenges completed</Text>
			<View style={{height: 20}}/>
			<Button title="Logout" onPress={() => auth.actions.logout()}></Button>

            <StatusBar style="auto"/>
		</View>
	)
}