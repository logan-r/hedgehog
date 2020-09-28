import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../../components/AppLoading'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { auth } from 'firebase'
import AuthContext from '../../contexts/AuthContext'

export default function ProfilePage() {
	// Load fonts
	let [fontsLoaded] = useFonts({
		Comfortaa_700Bold
	})

	// Get info on authentication state
	const auth = useContext(AuthContext)

	// While fonts are loading, display loading page
	if (!fontsLoaded) {
		return <AppLoading/>
	}

	return (
		<View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.bigText}>{auth.currentUser.email}</Text>
                <Text>20 challenges completed</Text>
				<View style={{height: 20}}/>
				<Button title="Logout" onPress={() => auth.actions.logout()}></Button>
            </View>

            <StatusBar style="auto"/>
		</View>
	)
}

// Get screen dimensions
var { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    navBar: {
        backgroundColor: '#4F3CC5',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },

    tab: {
        color: '#fff',
        padding: 16,
        paddingVertical: 20
    },

    colorWhite: {
        color: '#fff'
    },

    bigText: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    colorWhiteFade: {
        color: '#ffffff99'
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