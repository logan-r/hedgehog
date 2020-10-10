import React from 'react'
import { Text, View, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Styles, Base, Typography, Colors } from '../../styles'
import BackArrow from '../../components/BackArrow'
import TopicGridRow from '../../components/topic_grid/TopicGridRow'
import TopicBox from '../../components/topic_grid/TopicBox'

/**
 * First page of new challenge modal sequence where user chooses which topic of
 * challenge they are interested in (e.g. fitness, cooking, etc.)
 */
export default function NewChallengeModal_1Type({ navigation }) {    
	return (
		<View style={{...Base.pageWrapper, ...Base.modalBackground}}>
            <ScrollView style={{width: '100%', ...Base.modalPadding}}>
				<BackArrow/>
				
				<Text style={Styles.h1}>Try something new</Text>
				<Text style={[Styles.subtitle, {...Typography.md}]}>Select the type of activity to challenge yourself to do every day for a week:</Text>

				<TopicGridRow>
					<TopicBox topic="Fitness" name="Olympian" description="Gym, Running, Excercise, Sports and more" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/fitness.png')} clipartHeight={110} clipartPadding={[-7, 2]} />
					<TopicBox topic="Academic" name="Einstein 2.0" description="Gym, Running, Excercise, Sports and more" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/academic.png')} clipartHeight={96} clipartPadding={[0, 11]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="The Arts" name="Picasso" description="Drawing, Painting, Music, Sculpting and more" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/art.png')} clipartHeight={84} clipartPadding={[-15, 11]} />
					<TopicBox topic="Culinary Arts" name="Master Chef" description="Cooking, Baking, New Cuisines and more" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="Literature" name="Sheakspeare" description="Read that book, write your story, become a poet" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
					<TopicBox topic="Brain Workout" name="Enigma" description="Crossword, Sudoku, Riddles and more" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/enigma.png')} clipartHeight={85} clipartPadding={[0, 9]} />
				</TopicGridRow>
				<TopicGridRow>
					<TopicBox topic="Improvement" name="Eat Pray Love" description="Mediate and find your true self" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/cooking.png')} clipartHeight={96} clipartPadding={[0, 11]} />
					<TopicBox topic="Exploration" name="Adventurer" description="Go someplace new" onPress={() => navigation.push('NewChallenge: Step 2')} clipart={require('../../assets/img/clipart/adventure.png')} clipartHeight={104} clipartPadding={[-46, 6]} />
				</TopicGridRow>

				<View style={{height: 120}}/>
            </ScrollView>

            <StatusBar style="auto" backgroundColor={Colors.black20} />
		</View>
	)
}