import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Keyboard, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../components/AppLoading'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function LoginPage({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [keyboardVisible, setKeyboardVisible] = useState(false)

	// Track if keyboard is visible
	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			"keyboardDidShow",
			() => setKeyboardVisible(true)
		)
		const keyboardDidHideListener = Keyboard.addListener(
			"keyboardDidHide",
			() => setKeyboardVisible(false)
		)

		return () => {
			keyboardDidShowListener.remove()
			keyboardDidHideListener.remove()
		}
	}, [])

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
			<View style={{height: 80}}></View>

			{
				!keyboardVisible && <>
					<View>
						<Image style={styles.heroImage} source={require('../assets/img/beach-party.png')} resizeMode="cover" />
					</View>

					<View style={styles.heading}>
						<Text style={styles.title}>Hedgehog</Text>
						<Text style={styles.subtitle}>Try new experiences with friends</Text>
					</View>
				</>
			}

			<View style={styles.loginForm}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={text => setEmail(text)}
					defaultValue={email}
					placeholderTextColor="#bbb"
				/>

				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={text => setPassword(text)}
					defaultValue={password}
					placeholderTextColor="#bbb"
				/>
				
				<TouchableHighlight onPress={() => alert("sign up")}>
					<View style={styles.button}>
						<Text style={{color: '#fff'}}>Sign Up</Text>
					</View>
				</TouchableHighlight>
			</View>

			<TouchableWithoutFeedback style={styles.SignUpCTA} onPress={() => navigation.navigate('Login')}>
				<Text style={{color: '#ddd'}}>Already have an account?</Text>
				<Text style={styles.link}>Sign In</Text>
			</TouchableWithoutFeedback>

			<View style={{height: 50}}></View>

			<StatusBar style="auto" />
		</View>
	)
}

// Get screen dimensions
var { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#066078',
        alignItems: 'center',
        justifyContent: 'center'
    },
	button: {
		alignItems: "center",
		backgroundColor: "#d18315",
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderRadius: 8,
	},
	link: {
		fontSize: 16,
		color: '#e8b21e',
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
		width: width * 0.7,
		height: width * 0.7 * 1/1,
		overflow: 'visible'
	},

	heading: {
        alignItems: 'center'
	},
	title: {
		fontFamily: 'Comfortaa_700Bold',
		fontSize: 24,
		marginBottom: 6,
		color: '#eee'
	},
	subtitle: {
		color: '#ddd'
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