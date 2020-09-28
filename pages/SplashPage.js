import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function SplashPage() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})