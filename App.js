import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as firebase from 'firebase'
import "firebase/auth"

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AppLoading from './components/AppLoading'
import MainPage from './pages/MainPage.js'
import JoinChallengePage from './pages/JoinActivity'

const Stack = createStackNavigator()

var firebaseConfig = {
    apiKey: "AIzaSyDHm5zsEnnl6RPKBzIFPjeeDWUX28gUKok",
    authDomain: "hedgehog-e574b.firebaseapp.com",
    databaseURL: "https://hedgehog-e574b.firebaseio.com",
    projectId: "hedgehog-e574b",
    storageBucket: "hedgehog-e574b.appspot.com",
    messagingSenderId: "736707150699",
    appId: "1:736707150699:web:a5322710e49185f5db822e",
    measurementId: "G-DVESHNN1EE"
}
  
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const API = {
	login: (email, password) => auth.signInWithEmailAndPassword(email, password),
	signup: (email, password) => auth.createUserWithEmailAndPassword(email, password),
	logout: () => auth.signOut()
}

export default function App() {
	// Track current user
	const [currentUser, setCurrentUser] = useState(null)
	const [userInitialized, setUserInitialized] = useState(false)

	// Track when the current user updates
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(user) {
			// Record that user state (whether logged in or not) has been found
			setUserInitialized(true)

			if (user) {
				setCurrentUser(user)
			} else {
				setCurrentUser(false)
			}
		})
	}, [])

	// If user hasn't been initialized yet then 
	if (!userInitialized) {
		return <AppLoading></AppLoading>
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Login">{props => <LoginPage {...props} API={API} currentUser={currentUser} />}</Stack.Screen>
				<Stack.Screen name="SignUp">{props => <SignUpPage {...props} API={API} currentUser={currentUser} />}</Stack.Screen>

				<Stack.Screen name="Main">{props => <MainPage {...props} API={API} currentUser={currentUser} labelStyle={{padding: 20}} />}</Stack.Screen>

				<Stack.Screen name="JoinChallenge">{props => <JoinChallengePage {...props} API={API} currentUser={currentUser} />}</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}