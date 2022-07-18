import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boxes extends React.Component {

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.box}>
						<View style={styles.inner}>
								<Text>Kaya FM</Text>
						</View>
				</View>	

				<View style={styles.box}>
						<View style={styles.inner}>
								<Text>Sasfin Interview</Text>
						</View>
				</View>	

				<View style={styles.box}>
						<View style={styles.inner}>
								<Text>Wits University</Text>
						</View>
				</View>

				<View style={styles.box}>
						<View style={styles.inner}>
								<Text>SS & AA</Text>
						</View>
				</View>	

			</View>
		);
	}
}

const styles = StyleSheet.create({
		container: {
			width: '100%',
			height: '85%',
			padding: 5,
			flexDirection:'row',
			flexWrap: 'wrap'
		},
		box: {
			width: '50%',
			height: '50%',
			padding: 5
		},
		inner: {
			flex: 1,
			backgroundColor: 'grey',
			alignItems: 'center',
			justifyContent: 'center'
		}
});