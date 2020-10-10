import React from 'react'
import { Text, View, Image, Dimensions, ScrollView, TouchableHighlight, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { Styles, Base, Typography, Colors } from '../../styles'
import BackArrow from '../../components/BackArrow'

// Get screen dimensions to calculate size of circle background for header
const { width } = Dimensions.get('window')
const circleDiamater = width * 1.7
const displayedHeight = 340 // Height of portion of circle displayed onscreen

// TODO: Dynamically loadclipart
const clipart = require('../../assets/img/clipart/fitness.png')
const clipartDimensions = Image.resolveAssetSource(clipart)
const clipartHeight = 164
const clipartPadding = [-7, -2]

/**
 * Second page of new challenge modal sequence where user chooses which task
 * to challenge themselves to from the topic they select on previous page
 */
export default function NewChallengeModal_2Task({ navigation }) {    
	return (
		<View style={{...Base.pageWrapper, ...Base.pageBackground}}>
			<View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
				<View style={{
					width: circleDiamater,
					height: circleDiamater,
					borderRadius: width,
					borderColor: Colors.black10,
					borderWidth: 7,

					position: 'absolute',
					top: -(circleDiamater - displayedHeight),

					backgroundColor: Colors.black20
				}}></View>
			</View>

			<View style={{...Base.modalPadding, width: '100%'}}>
				<BackArrow/>
				
				<View style={{position: 'relative', top: -13}}>
					<View style={{display: 'flex', alignItems: 'center'}}>		
						<Image
							style={{
								left: clipartPadding[0],
								top: clipartPadding[1],
								width: clipartHeight / clipartDimensions.height * clipartDimensions.width,
								height: clipartHeight
							}}
							resizeMode="cover"
							source={clipart}
						/>
					</View>
					<Text style={[Styles.h3, {textAlign: 'center'}]}>Start Fitness Challenge</Text>
				</View>
				
				<View style={{height: 90}}/>
				
				<Text style={[Styles.text, {color: Colors.blue, ...Typography.md}]}>Every day for a week I will...</Text>
			</View>

			<ScrollView style={{width: '100%', marginTop: 6, borderTopWidth: 1, borderTopColor: Colors.black20}}>
				<ChallengeItem title="Go for a run" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Go to the gym" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Go for a bike ride" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Practice a sport" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Do yoga" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Go for a run" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Go to the gym" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Go for a bike ride" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Practice a sport" onPress={() => navigation.push('NewChallenge: Step 3')} />
				<ChallengeItem title="Do yoga" onPress={() => navigation.push('NewChallenge: Step 3')} />
			</ScrollView>

            <StatusBar style="auto" backgroundColor={Colors.black15} />
		</View>
	)
}

function ChallengeItem({ title, onPress }) {
	return (
		<TouchableHighlight onPress={onPress} style={localStyles.challengeItem} underlayColor="transparent">
			<Text style={[{...Typography.bodyMedium, ...Typography.lg}]}>{title}</Text>
		</TouchableHighlight>
	)
}

const localStyles = StyleSheet.create({
	challengeItem: {
		paddingHorizontal: Base.modalPadding.paddingHorizontal,
		borderBottomWidth: 1,
		borderBottomColor: Colors.black20,
		paddingBottom: 15,
		paddingTop: 17
	}
})