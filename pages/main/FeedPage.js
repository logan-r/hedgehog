import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../../components/AppLoading'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function FeedPage({ navigation, API, currentUser }) {
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

            <View style={styles.body}>
				<View style={styles.challenges}>
					<View style={{height: 100}}/>

					<Text style={styles.h1}>2 Challenges Remaining</Text>
					<Text style={styles.blueText}>10 hours left to reach today’s goals</Text>

					<View style={styles.goals}>
						<View style={styles.goal}>
							<Text>Go for a run</Text>
						</View>

						<View style={styles.goal}>
							<Text>Practice guitar</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<Text>
						LoganR
					</Text>
				</View>
            </View>

            <StatusBar style="auto" />
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
        alignItems: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%'
    },

	challenges: {
		backgroundColor: '#dadfe5',
		width: '100%',
		paddingHorizontal: 40
	},

	h1: {
		fontSize: 21,
		fontWeight: 'bold'
	},
	blueText: {
		color: '#2774CF'
	},

	goals: {
		marginVertical: 30,
		flexDirection: 'row'
	},
	goal: {
		backgroundColor: '#fff',
		paddingVertical: 12,
		paddingHorizontal: 18,
		borderRadius: 16,
		marginRight: 10,

		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,

		borderWidth: 2,
		borderColor: '#d0d0d0'
	},

	completeGoalCTA: {
		alignItems: 'flex-end'
	},
	completeGoalCTAText: {
		color: '#2774CF',
		fontSize: 16,
		marginBottom: 24,
		fontWeight: 'bold'
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