import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function Update({ navigation }) {
	return (
		<SafeAreaView style={{'flex':1}}>
			<View style={styles.authContainer}>
				<Text style={[styles.titleL, styles.mb50]}>Update Details</Text>
				<TextInput style={[styles.customeInput, styles.mt20]} placeholder="Name & Surname"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Email address"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Occupation"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Password" secureTextEntry={true}></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Confirm Password" secureTextEntry={true}></TextInput>
				<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]} onPress={() => navigation.navigate('Profile')}>
					<Text style={[styles.textWhite]}>Update Profile</Text>
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
		opacity: 0.5
	}
})

export default Update