import React from 'react'
import { Text } from 'react-native'
//Utils
import mainStyles from '../utils/MainGlobalStyles'

function SubTitle(props) {
	return (
		<Text style={[mainStyles.subtitle]}>{props.title}</Text>
	)
}

export default SubTitle