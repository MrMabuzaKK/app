import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Boxes extends React.Component {

	render() {
		return(
			<View style={styles.container}>

				<View style={styles.box}>
						<View style={styles.inner1}>
								<Text>MasterClass 1</Text>
						</View>
				</View>	

				<View style={styles.box}>
						<View style={styles.inner2}>
								<Text>MasterClass 2</Text>
						</View>
				</View>	

				<View style={styles.box}>
						<View style={styles.inner3}>
								<Text>MasterClass 3</Text>
						</View>
				</View>

				<View style={styles.box}>
						<View style={styles.inner4}>
								<Text>MasterClass 4</Text>
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
		inner1: {
			flex: 1,
			backgroundColor: 'grey',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner2: {
			flex: 1,
			backgroundColor: 'grey',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner3: {
			flex: 1,
			backgroundColor: 'grey',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		},
		inner4: {
			flex: 1,
			backgroundColor: 'grey',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 14
		}
});