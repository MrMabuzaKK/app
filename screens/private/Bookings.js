import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function Booking({ navigation }) {
	return (
		<SafeAreaView style={{'flex':1}}>
			<View style={styles.authContainer}>
				<Text style={[styles.titleL, styles.mb0]}>Please complete your booking</Text>
				<TextInput style={[styles.customeInput, styles.mt20]} placeholder="Name & Surname"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Email address"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Cell Number"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Occupation"></TextInput>
				<TextInput style={[styles.customeInput, styles.mt10]} placeholder="Purpose of your booking"></TextInput>
				<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]} onPress={() => navigation.navigate('Profile')}>
					<Text style={[styles.textWhite]}>Submit</Text>
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
		fontSize: 20,
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

export default Booking