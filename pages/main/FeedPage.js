import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Dimensions, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import {
	useFonts,
	Comfortaa_700Bold
} from "@expo-google-fonts/dev"

import AppLoading from '../../components/AppLoading'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function FeedPage() {
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

            <ScrollView style={styles.body}>
				<View style={styles.challenges}>
					<View style={{height: 100}}/>

					<Text style={styles.h1}>2 Challenges Remaining</Text>
					<Text style={styles.blueText}>10 hours left to reach today’s goals</Text>

					<View style={styles.goals}>
						<View style={styles.goal}>
							<Text>Go for a run</Text>
						</View>

						<View style={styles.goal}>
							<Text>Practice guitar</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								LoganR
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 2 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Reading Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/reading.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Reading my favourite book "The Phantom Tollbooth" again</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								MichaelJ
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 5 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Cooking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/pasta.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Made my first pasta dish. Very exciting</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								BillyJ
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 1 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Swimming Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/swim.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>First day of swimming after breakimg my leg. It went better than I thought.</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								NoraR
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 4 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Sculpting Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/claysculpture.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Midway through learning to sculpt with clay</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								MarilynM
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 6 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Baking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/macarons.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>These were really hard to make</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								JustinT
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 2 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Puzzle Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/puzzle.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Still working on my puzzle. Hopefully I'll be done by day 7!</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								RyanG
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 2 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Meditation Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/meditate.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Still trying to get the grasp on relaxing my mind</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								LennyK
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 4 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Biking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/bike.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Biking every day is really helping me destress</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								TeddyR
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 5 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Gardening Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/bees.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Met a little friend while gardening today</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								RosalindF
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 7 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Chemistry Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/chem.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Created a little something today. Sad this is the last day of this challenge</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								MichaelJ
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 2 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Cooking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/burger.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Made a really nice looking burger</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								JulieP
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 3 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Walking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/squirrel.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>A squirrel came up to me on my walk today!</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								BobR
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 6 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Ski Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/ski.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Fell a lot today but got a goofy photo of me :)</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								MarieC
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 1 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Coding Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/coding.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>Finally learning how to code!</Text>
						</View>
					</View>
				</View>

				<View style={styles.feed}>
					<View style={styles.post}>
						<View style={styles.postHeading}>
							<Text style={{fontWeight: 'bold', fontSize: 12}}>
								JustinT
							</Text>
							<View style={{flex: 1}}/>
							<Text style={{fontSize: 12}}>
								<Text style={{color: '#444'}}>Day 7 of </Text><Text style={{color: '#444', fontWeight: 'bold'}}>Baking Challenge</Text>
							</Text>
						</View>
						<Image style={styles.img} source={require('../../assets/img/cookies.jpg')} resizeMode="cover" />
						<View style={styles.caption}>
							<Text style={styles.captionText}>I've improved my baking skills so much this week :)</Text>
						</View>
					</View>
				</View>
            </ScrollView>

            <StatusBar style="auto" backgroundColor='#DADFE5' />
		</View>
	)
}

// Get screen dimensions
var { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 1,
		width: '100%'
	},
	
	img: {
		width: width,
		height: width / 4032 * 3024
	},

	challenges: {
		backgroundColor: '#dadfe5',
		width: '100%',
		paddingHorizontal: 40
	},

	h1: {
		fontSize: 21,
		fontWeight: 'bold'
	},
	blueText: {
		color: '#2774CF'
	},

	goals: {
		marginVertical: 30,
		flexDirection: 'row'
	},
	goal: {
		backgroundColor: '#fff',
		paddingVertical: 12,
		paddingHorizontal: 18,
		borderRadius: 16,
		marginRight: 10,

		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 4,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,

		borderWidth: 2,
		borderColor: '#d0d0d0'
	},

	completeGoalCTA: {
		alignItems: 'flex-end'
	},
	completeGoalCTAText: {
		color: '#2774CF',
		fontSize: 16,
		marginBottom: 24,
		fontWeight: 'bold'
	},

	post: {
		marginVertical: 40
	},
	postHeading: {
		width: '100%',
		paddingHorizontal: 40,
		flexDirection: 'row',
		paddingBottom: 9
	},
	caption: {
		paddingHorizontal: 40,
		paddingTop: 12
	},
	captionText: {
		color: '#333'
	},

    colorWhite: {
        color: '#fff'
    },

    bigText: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    colorWhiteFade: {
        color: '#ffffff99'
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