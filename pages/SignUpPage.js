import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useKeyboardVisible from '../utils/hooks/useKeyboardVisible'
import AuthContext from '../contexts/AuthContext'

export default function LoginPage({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	// Track if keyboard is visible
	const isKeyboardVisible = useKeyboardVisible()

	// Get info on authentication state
	const auth = useContext(AuthContext)

	return (
		<View style={styles.container}>
			<View style={{height: 80}}></View>

			{
				!isKeyboardVisible && <>
					<View>
						<Image style={styles.heroImage} source={require('../assets/img/clipart/beach-party.png')} resizeMode="cover" />
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
					placeholder="Username"
					placeholderTextColor="#bbb"
				/>

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
				
				<TouchableHighlight onPress={() => auth.actions.signup(email, password).catch(e=>alert(e))} underlayColor={ 'transparent' }>
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
		paddingLeft: 16,
		color: '#fff'
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