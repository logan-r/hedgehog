import React from 'react'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Styles, Typography } from '../../styles'

export default function FeedPage() {
	return (
		<View style={Styles.pageContainer}>
			<Text style={Styles.h1}>Photo Journals</Text>
			<Text style={Styles.subtitle}>
				Complete a challenge to unlock journals
			</Text>

            <StatusBar style="auto"/>
		</View>
	)
}