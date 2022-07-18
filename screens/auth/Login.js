import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function Login({ navigation }) {
	return (
		<SafeAreaView style={{'flex':1}}>
			<View style={styles.authContainer}>
				<Text style={[styles.titleL, styles.mb50]}>Login</Text>
				<TextInput style={[styles.customeInput, styles.mt20]} placeholder="Email Address"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Password" secureTextEntry={true}></TextInput>
				<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]} onPress={() => navigation.navigate('Home')}>
					<Text style={[styles.textWhite]}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
					<Text style={[styles.mt20, styles.lightColor]}>Don't have an account? Register</Text>
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
		backgroundColor: '#fff'
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

export default Login