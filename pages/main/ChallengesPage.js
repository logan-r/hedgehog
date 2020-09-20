import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../../components/AppLoading'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ChallengesPage({ navigation, API, currentUser }) {
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

            <ScrollView style={styles.body}>
				<View style={{height: 100}}/>
				<Text style={styles.h1}>Your Challenges</Text>

				<View style={styles.topic}>
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageFitness} source={require('../../assets/img/fitness.png')} resizeMode="cover" />
					</View>
					<Text style={styles.challengeHeading}>Every day for a week</Text>
					<Text style={styles.challengeTitle}>Go for a run</Text>
					
					<Text style={styles.daysText}><Text style={{fontSize: 18}}>2</Text>/7 days completed</Text>
					<View style={{width: '100%', height: 10, backgroundColor: '#eaeaea', marginTop: 2, borderRadius: 16}}>
						<View style={{width: '28.5%', height: 10, backgroundColor: '#DC5252', borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}></View>
					</View>

					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 24, backgroundColor: '#DC5252', padding: 10, borderRadius: 8}}>
						<MaterialCommunityIcons name='camera-plus' color='#fff' size={28} />
						<Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12, paddingLeft: 8}}>
							Post Today's Photo
						</Text>
					</View>
				</View>

				<View style={styles.topic}>
					<View style={{position: 'relative'}}>
						<Image style={styles.imageArt} source={require('../../assets/img/art.png')} resizeMode="cover" />
					</View>
					<Text style={styles.challengeHeading}>Every day for a week</Text>
					<Text style={styles.challengeTitle}>Write a poem</Text>
					
					<Text style={styles.daysText}><Text style={{fontSize: 18}}>5</Text>/7 days completed</Text>
					<View style={{width: '100%', height: 10, backgroundColor: '#eaeaea', marginTop: 2, borderRadius: 16}}>
						<View style={{width: '71.5%', height: 10, backgroundColor: '#46C18E', borderTopLeftRadius: 16, borderBottomLeftRadius: 16}}></View>
					</View>

					<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 24}}>
						<MaterialCommunityIcons name='check-decagram' color='#46C18E' size={28} />
						<Text style={{color: '#46C18E', fontWeight: 'bold', fontSize: 12, paddingLeft: 8}}>
							Today’s Goal Completed
						</Text>
					</View>
				</View>

				<TouchableHighlight onPress={() => navigation.push('JoinChallenge')} style={{marginHorizontal: 40, marginTop: 30}}>
					<View style={{alignItems: 'center', backgroundColor: '#DADFE5', padding: 20, borderRadius: 16}}>
						<Text>Find Your Next Challenge</Text>
					</View>
				</TouchableHighlight>
			</ScrollView>

            <StatusBar style="auto" backgroundColor='#f9f9f9' />
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
		width: '100%'
	},

	h1: {
		fontSize: 21,
		fontWeight: 'bold',
		paddingHorizontal: 40
	},
	blueText: {
		color: '#2774CF'
	},

	topic: {
		backgroundColor: '#fff',
		borderRadius: 16,
		
		marginTop: 50,
		marginBottom: 20,

		paddingVertical: 20,
		paddingHorizontal: 30,
		margin: 40,

		shadowColor: "#000",
		shadowOffset: {
			width: 8,
			height: 16,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,

		elevation: 3,
	},
	challengeHeading: {
		marginTop: 5,
		fontSize: 10,
		textTransform: 'uppercase'
	},
	challengeTitle: {
		fontSize: 18,
		fontWeight: 'bold'
	},

	daysText: {
		marginTop: 15,
		fontSize: 12
	},
	topicDescription: {
		color: '#333'
	},

	imageFitness: {
		position: 'absolute',
		width: 110,
		height: 110,
		top: -78,
		right: -18
	},

	imageArt: {
		position: 'absolute',
		width: 124,
		height: 80,
		top: -60,
		right: -18
	},

	imageEnigma: {
		position: 'absolute',
		width: 111,
		height: 80,
		top: -58,
		right: -28
	},

	imageCooking: {
		position: 'absolute',
		width: 84,
		height: 102,
		top: -78,
		right: -8
	},

	imageAcademic: {
		position: 'absolute',
		width: 85,
		height: 90,
		top: -70,
		right: -10
	},
	
	imageImprovement: {
		position: 'absolute',
		width: 91,
		height: 90,
		top: -70,
		right: -15
	},

	imageAdventure: {
		position: 'absolute',
		width: 133,
		height: 100,
		top: -70,
		right: -25
	}
})