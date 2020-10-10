import React from 'react'
import { Text, View, Image, Dimensions, TouchableHighlight, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { Styles, Base, Typography, Colors } from '../../styles'
import BackArrow from '../../components/BackArrow'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
				
				<View style={{height: 90 - 26}}/>
			</View>
			
			<View style={{width: '100%'}}>
				<TouchableHighlight onPress={navigation.goBack} style={localStyles.bigField} underlayColor={Colors.black10}>
					<>
						<Text style={[Styles.text, Styles.muted]}>Every day for a week I will...</Text>
						<View style={localStyles.bigFieldValue}>
							<Text style={{...Typography.bodyMedium, ...Typography.xxxl}}>Go for a run</Text>
							<AntDesign name="edit" size={20} color={Colors.black60} />
						</View>
					</>
				</TouchableHighlight>
				
				<TouchableHighlight onPress={() => false} style={localStyles.bigField} underlayColor={Colors.black10}>
					<>
						<Text style={[Styles.text, Styles.muted]}>Starting on...</Text>
						<View style={localStyles.bigFieldValue}>
							<Text style={{...Typography.bodyMedium, ...Typography.xxxl}}>Today, 10/9/2020</Text>
							<AntDesign name="edit" size={20} color={Colors.black60} />
						</View>
					</>
				</TouchableHighlight>
			</View>

			<View style={{flex: 1}} />

			<View style={{paddingHorizontal: Base.modalPadding.paddingHorizontal, marginVertical: 26, width: '100%'}}>
				<TouchableOpacity onPress={() => navigation.navigate("Main")} style={{elevation: 10}}>
					<LinearGradient colors={[Colors.marigold, Colors.autumn]} start={{x: 0.1, y: 0.1}} end={{x: 0.9, y: 0.9}} style={localStyles.button}>
						<Text style={localStyles.buttonText}>Start Challenge</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>

            <StatusBar style="auto" backgroundColor={Colors.black15} />
		</View>
	)
}

const localStyles = StyleSheet.create({
	bigField: {
		marginBottom: 12,
		paddingTop: 18,
		paddingBottom: 12,
		paddingHorizontal: Base.modalPadding.paddingHorizontal
	},

	bigFieldValue: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 2
	},

	button: {
		width: '100%',
		borderRadius: 14,
		padding: 14
	},

	buttonText: {
		textAlign: 'center',
		color: Colors.white,
		...Typography.bodySemiBold,
		...Typography.lg
	}
})