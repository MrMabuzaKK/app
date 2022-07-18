import { StyleSheet } from 'react-native';

export default const styles =  StyleSheet.create({
	container: {
		flex: 1,
	},
	tabBarNavigation: {
		position: 'absolute',
		height: 60,
		bottom: 0,
		paddingHorizontal: 30,
		width: '90%',
		margin: 20,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		flexDirection: 'row',
		borderColor: '#aaa',
		borderWidth: 1,
		borderBottomWidth: 0,
	},
	tabBar: {
		marginHorizontal: 16,
	},
	tabBarName: {
		fontSize: 10,
		opacity: .5,
	},
	textWhite: {
		color: '#000000',
	},
	avator: {
		width: 100,
		height: 100,
		backgroundColor: '#dddddd',
		borderRadius: 100,
		marginTop: 50,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	title: {
		marginTop: 20,
		paddingTop: 10,
		fontSize: 16,
		// color: '#fff',
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 12,
		opacity: .5,
		// color: '#fff',
		textAlign: 'center',
	},
	features: {
		width: '100%',
		height: 200,
		paddingHorizontal: 40,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// borderBottomWidth: 1,
		// borderColor: '#aaa',
	},
	featuresIcon: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
		margin: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	featureTitle: {
		fontSize: 10,
		opacity: .5,
				flexWrap: 'wrap',
	},
	tabNavIcon: {
		width: 20,
		height: 20,
		resizeMode: 'contain',
		margin: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
	}
})