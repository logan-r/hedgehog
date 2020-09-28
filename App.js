import React, { useEffect, useReducer } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import * as firebase from 'firebase'
import "firebase/auth"

import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import MainPage from './pages/MainPage.js'
import JoinChallengePage from './pages/JoinActivity'
import SplashPage from './pages/SplashPage'

const Stack = createStackNavigator()

import AuthContext from './contexts/AuthContext'

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

export default function App() {
	// App authetication state and actions that can be performed to manipulate that state
	const [authState, authDispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'SIGN_IN':
					return {
						...prevState,
						isLoading: false,
						currentUser: action.user
					}
				case 'SIGN_OUT':
					return {
						...prevState,
						isLoading: false,
						currentUser: false
					}
			}
		},

		// Initial app state
		{
			currentUser: false,
			isLoading: true
		}
	)

	// Track when the current user updates
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function(user) {
			if (user) {
				authDispatch({ type: 'SIGN_IN', user })
			} else {
				authDispatch({ type: 'SIGN_OUT' })
			}
		})
	}, [])

	// 
	const authContext = {
		...authState,
		actions: {
			login: (email, password) => auth.signInWithEmailAndPassword(email, password),
			signup: (email, password) => auth.createUserWithEmailAndPassword(email, password),
			logout: () => auth.signOut()
		}
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false}}>
					{
						authState.isLoading ? 
							<>
								<Stack.Screen name="Splash" component={SplashPage} />
							</> :
						!authState.currentUser ?
							<>
								<Stack.Screen name="Login" component={LoginPage} />
								<Stack.Screen name="SignUp" component={SignUpPage} />
							</> :
							<>
								<Stack.Screen name="Main" component={MainPage} />
								<Stack.Screen name="JoinChallenge" component={JoinChallengePage} />
							</>
					}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	)
}