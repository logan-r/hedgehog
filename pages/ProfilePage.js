import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../components/AppLoading'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ProfilePage({ navigation, API, currentUser }) {
	// If user is logged in redirect to profile page
	if (!currentUser) {
		navigation.push('Login')
	}
    
	// Load fonts
	let [fontsLoaded] = useFonts({
		Comfortaa_700Bold
	})

	// While fonts are loading, display loading page
	if (!fontsLoaded) {
		return <AppLoading/>
	}

	return (
		<View style={styles.container}>
			<Text>Profile page!</Text>

            <Button onPress={() => API.logout()} title="Logout"></Button>

			<StatusBar style="auto" />
		</View>
	)
}

// Get screen dimensions
var { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
	button: {
		alignItems: "center",
		backgroundColor: "#cf4327",
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderRadius: 8,
	},
	link: {
		fontSize: 16,
		color: '#913f04',
		fontWeight: '700'
	},
	input: {
		height: 40,
		width: width * 0.7,
		backgroundColor: '#00000011',
		borderRadius: 16,
		borderColor: '#3a301b',
		marginBottom: 16,
		paddingLeft: 16
	},

	heroImage: {
		width: width * 0.8,
		height: width * 0.8 * 912/1216,
		overflow: 'visible'
	},

	heading: {
        alignItems: 'center'
	},
	title: {
		fontFamily: 'Comfortaa_700Bold',
		fontSize: 24,
		marginBottom: 6
	},

	loginForm: {
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
	},

	SignUpCTA: {
        alignItems: 'center',
        justifyContent: 'center'
	}
})