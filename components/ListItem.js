import React from 'react'
import { View, Text } from 'react-native'

//Utils
import mainStyles from '../utils/MainGlobalStyles'


function ListItem(props) {
	return (
		<View style={mainStyles.listItem}>
			<Text>{props.name}</Text>
			<Text>{props.value}</Text>
		</View>
	)
}

export default ListItem
