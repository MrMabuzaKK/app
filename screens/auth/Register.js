import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function Register({ navigation }) {
	return (
		<SafeAreaView style={{'flex':1}}>
			<View style={styles.authContainer}>
				<Text style={[styles.titleL, styles.mb50]}>Register</Text>
				<Text>Note You are on a 7 days trial, to have full access please add</Text>
				<TextInput style={[styles.customeInput, styles.mt20]} placeholder="Name & Surname"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Email address"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Occupation"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Password" secureTextEntry={true}></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Confirm Password" secureTextEntry={true}></TextInput>
				<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]} onPress={() => navigation.navigate('Login')}>
					<Text style={[styles.textWhite]}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={[styles.mt20, styles.lightColor]}>Have an acccount already, Login</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	authContainer: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40,
		backgroundColor: '#fff',
	},
	titleL: {
		fontSize: 30,
	},
	customeInput: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		width: '100%',
		borderColor: '#ddd',
		borderWidth: 1,
		borderRadius: 4,

	},
	mt20: {
		marginTop: 20,
	},
	mt10: {
		marginTop: 10,
	},
	mb50: {
		marginBottom: 50,
	},
	btnPrimary: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		backgroundColor: '#000000',
		color: '#000000',
		width: '100%',
		textAlign: 'center',
		borderRadius: 4,
	},
	textWhite: {
		color: '#ffffff',
	},
	contentCenter: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	lightColor: {
		opacity: .5
	}
})

export default Register