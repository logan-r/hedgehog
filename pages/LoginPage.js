import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<View style={styles.container}>
			<Text>Login</Text>

			<TextInput
				style={{height: 40}}
				placeholder="Email"
				onChangeText={text => setEmail(text)}
				defaultValue={email}
			/>

			<TextInput
				style={{height: 40}}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={text => setPassword(text)}
				defaultValue={password}
			/>
			
			<TouchableHighlight onPress={() => alert("sign in")}>
				<View style={styles.button}>
					<Text>Touch Here</Text>
				</View>
			</TouchableHighlight>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10
	}
})