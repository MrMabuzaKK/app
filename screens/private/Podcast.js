import React from 'react';
import { StyleSheet, Image, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

import avator from '../../assets/Layer-2.png';

import mainStyles from '../../utils/MainGlobalStyles';

import heartActive from '../../assets/icons/heartActive.png';


export default class Boxes extends React.Component {

	render() {
		return(
			<SafeAreaView style={{'flex':1}}>

				<View style={styles.container}>

					<View style={styles.box}>
						<View style={styles.inner1}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>Kaya FM</Text>
								</TouchableOpacity>
						</View>
					</View>	

					<View style={styles.box}>
						<View style={styles.inner2}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>Sasfin Interview</Text>
								</TouchableOpacity>
						</View>
					</View>	

					<View style={styles.box}>
						<View style={styles.inner3}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>Wits University</Text>
								</TouchableOpacity>
						</View>
					</View>	

					<View style={styles.box}>
						<View style={styles.inner4}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>SS & AA</Text>
								</TouchableOpacity>
						</View>
					</View>	
				

					<View style={styles.box}>
						<View style={styles.inner4}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>VW Sales Workshop</Text>
								</TouchableOpacity>
						</View>
					</View>	

					<View style={styles.box}>
						<View style={styles.inner4}>
								<TouchableOpacity style={[styles.btnPrimary, styles.mt10, styles.contentCenter]}  onPress={() => { ({})}}>
									<Text style={[styles.textWhite]}>Metro FM</Text>
								</TouchableOpacity>
						</View>
					</View>	
				</View>
				
			</SafeAreaView>
			);
	}
}

const styles = StyleSheet.create({
		container: {
			width: '100%',
			height: '100%',
			padding: 5,
			flexDirection:'row',
			flexWrap: 'wrap',
			marginTop: 20
		},
		box: {
			width: '50%',
			height: '30%',
			padding: 5,
		},
		inner1: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner2: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner3: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner4: {
			flex: 1,
			backgroundColor: 'white',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		text: {
			flex: 1,
			alignItems: 'center',
			justifyContent: 'flex-end',
			marginLeft: 130,
			fontWeight: 'bold',
			padding: 50
		},
		text2: {
			alignItems: 'center',
			justifyContent: 'center'
		},
		textWhite: {
			fontWeight: 'bold',
		},
});