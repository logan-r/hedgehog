import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import useKeyboardVisible from '../utils/hooks/useKeyboardVisible'
import { Colors } from '../styles'
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
			<View style={{height: 120}}></View>

			{
				!isKeyboardVisible && <>
					<View>
						<Image style={styles.heroImage} source={require('../assets/img/canoe-with-bg.png')} resizeMode="cover" />
					</View>

					<View style={styles.heading}>
						<Text style={styles.title}>Hedgehog</Text>
						<Text>It's happening</Text>
					</View>
				</>
			}

			<View style={styles.loginForm}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					onChangeText={text => setEmail(text)}
					defaultValue={email}
					placeholderTextColor="#3a301b"
				/>

				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={text => setPassword(text)}
					defaultValue={password}
					placeholderTextColor="#3a301b"
				/>
				
				<TouchableHighlight onPress={() => auth.actions.login(email, password).catch(e=>alert(e))} underlayColor={ 'transparent' }>
					<View style={styles.button}>
						<Text style={{color: '#fff'}}>Login</Text>
					</View>
				</TouchableHighlight>
			</View>

			<TouchableWithoutFeedback style={styles.SignUpCTA} onPress={() => navigation.navigate('SignUp')}>
				<Text>Don't have an account?</Text>
				<Text style={styles.link}>Sign Up</Text>
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
        alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.marigold
    },
	button: {
		alignItems: "center",
		backgroundColor: "#cf4327",
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderRadius: 8,
	},
	link: {
		fontSize: 16,
		color: '#913f04',
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
		width: width * 0.8,
		height: width * 0.8 * 912/1216,
		overflow: 'visible'
	},

	heading: {
        alignItems: 'center'
	},
	title: {
		fontFamily: 'Comfortaa_700Bold',
		fontSize: 24,
		marginBottom: 6
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