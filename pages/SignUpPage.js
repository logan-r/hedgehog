import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SignUpPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<View style={styles.container}>
			<Text>Sign Up</Text>

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
			
			<TouchableHighlight
				activeOpacity={0.6}
				underlayColor="#DDDDDD"
				onPress={() => alert('Pressed!')}
			>
				<View style={{ flex: 1, backgroundColor: '#fff' }}>
					<Text>Login</Text>
				</View>
			</TouchableHighlight>;

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
    }
})