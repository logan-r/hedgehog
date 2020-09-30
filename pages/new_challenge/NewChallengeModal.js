import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { ScrollView } from 'react-native-gesture-handler'
import { Styles, Base, Typography, Colors } from '../../styles'
import BackArrow from '../../components/BackArrow'
import TopicGridRow from '../../components/topic_grid/TopicGridRow'
import TopicBox from '../../components/topic_grid/TopicBox'

export default function NewChallengeModal({ navigation }) {    
	return (
		<View style={{...Base.pageWrapper, ...Base.modalBackground}}>
            <ScrollView style={{width: '100%', ...Base.modalPadding}}>
				<BackArrow/>
				
				<Text style={Styles.h1}>Try something new</Text>
				<Text style={[Styles.subtitle, {...Typography.md}]}>Select the type of activity to challenge yourself to do every day for a week:</Text>

				<TopicGridRow>
					<TopicBox topic="Fitness" name="Olympian" description="Gym, Running, Excercise, Sports and more" clipart={require('../../assets/img/clipart/fitness.png')} clipartHeight={110} clipartPadding={[-7, 2]} />
					<TopicBox topic="Academic" name="Einstein 2.0" description="Gym, Running, Excercise, Sports and more" clipart={require('../../assets/img/clipart/academic.png')} clipartHeight={96} clipartPadding={[0, 11]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="The Arts" name="Picasso" description="Drawing, Painting, Music, Sculpting and more" clipart={require('../../assets/img/clipart/art.png')} clipartHeight={84} clipartPadding={[-15, 11]} />
					<TopicBox topic="Culinary Arts" name="Master Chef" description="Cooking, Baking, New Cuisines and more" clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="Literature" name="Sheakspeare" description="Read that book, write your story, become a poet" clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
					<TopicBox topic="Brain Workout" name="Enigma" description="Crossword, Sudoku, Riddles and more" clipart={require('../../assets/img/clipart/enigma.png')} clipartHeight={88} clipartPadding={[0, 11]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="Improvement" name="Eat Pray Love" description="Mediate and find your true self" clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
					<TopicBox topic="Exploration" name="Adventurer" description="Go someplace new" clipart={require('../../assets/img/clipart/adventure.png')} clipartHeight={104} clipartPadding={[-46, 6]} />
				</TopicGridRow>

				<View style={{height: 120}}/>
            </ScrollView>

            <StatusBar style="auto" backgroundColor={Colors.black20} />
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