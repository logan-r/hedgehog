import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { ScrollView } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function JoinChallengePage({ navigation }) {    
	return (
		<View style={styles.container}>
            <ScrollView style={styles.body}>
				<View style={{height: 80}}/>

				<View style={styles.titleSection}>
					<Text onPress={() => navigation.goBack()}><MaterialCommunityIcons name='arrow-left' color='#333' size={28} /></Text>
					<Text style={styles.title}>Try something new</Text>
					<Text style={styles.description}>Select the type of activity to challenge yourself to do every day for a week</Text>
				</View>

				

				<View style={styles.topic}>		
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageCooking} source={require('../assets/img/cooking.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Master Chef</Text>
					<Text style={styles.topicDescription}>Learn to cook, taste new cuisines, and potentially open up your own bakery by the end of the challenge!</Text>
					<Text style={styles.link}>See culinary challenges</Text>
				</View>

				<View style={styles.topic}>		
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageAcademic} source={require('../assets/img/academic.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Einstein 2.0</Text>
					<Text style={styles.topicDescription}>Give your brain a workout by learning something new every day.</Text>
					<Text style={styles.link}>See academic challenges</Text>
				</View>

				<View style={styles.topic}>		
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageAdventure} source={require('../assets/img/adventure.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>The Adventurer</Text>
					<Text style={styles.topicDescription}>Explore the hidden world to see yourself in a new perspective.</Text>
					<Text style={styles.link}>See adventure challenges</Text>
				</View>
				
                <View style={styles.topic}>
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageFitness} source={require('../assets/img/fitness.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Future Olympian</Text>
					<Text style={styles.topicDescription}>From running to biking to weights, find the challenge to get your fitness game to the next level</Text>
					<Text style={styles.link}>See fitness challenges</Text>
				</View>

				<View style={styles.topic}>
					<View style={{position: 'relative'}}>
						<Image style={styles.imageArt} source={require('../assets/img/art.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Picasso</Text>
					<Text style={styles.topicDescription}>Become the true artist you were meant to be</Text>
					<Text style={styles.link}>See creative challenges</Text>
				</View>
				
                <View style={styles.topic}>		
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageEnigma} source={require('../assets/img/enigma.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Enigma</Text>
					<Text style={styles.topicDescription}>Discover unconventional games and activities to sharpen your mind!</Text>
					<Text style={styles.link}>See brain-testing challenges</Text>
				</View>

				

				<View style={styles.topic}>		
					<View style={{position: 'relative'}}>		
						<Image style={styles.imageImprovement} source={require('../assets/img/improvement.png')} resizeMode="cover" />
					</View>
					<Text style={styles.topicTitle}>Eat Pray Love</Text>
					<Text style={styles.topicDescription}>Feel like you're stuck? Choose an activity that will help you self-actualize.</Text>
					<Text style={styles.link}>See self-improvement challenges</Text>
				</View>

            </ScrollView>

            <StatusBar style="auto" backgroundColor="#DADFE5" />
		</View>
	)
}

// Get screen dimensions
var { width } = Dimensions.get('window')

const styles = StyleSheet.create({	
    container: {
        flex: 1,
        backgroundColor: '#DADFE5',
        alignItems: 'center',
        justifyContent: 'center'
	},
	body: {
		flex: 1,
	},
	link: {
		fontSize: 14,
		color: '#33c4e5',
		fontWeight: '700',
		marginTop: 10
	},

	titleSection: {
		width: '100%',
		justifyContent: 'flex-start',
		paddingHorizontal: 40
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 16,
		marginBottom: 4
	},
	description: {
		lineHeight: 22,
		color: '#696E74'
	},

	topic: {
		backgroundColor: '#fff',
		borderRadius: 16,
		
		marginTop: 50,
		marginBottom: 20,
		marginHorizontal: 40,

		paddingVertical: 20,
		paddingHorizontal: 30,

		shadowColor: "#000",
		shadowOffset: {
			width: 8,
			height: 16,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,

		elevation: 3,
	},
	topicTitle: {
		fontFamily: 'Comfortaa_700Bold',
		fontSize: 15,
		marginBottom: 8
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
		width: 90,
		height: 95,
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