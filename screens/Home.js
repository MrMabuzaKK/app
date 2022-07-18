 import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//Assets
import avator from '../assets/Layer-2.png';

//Screens
import DashboardScreen  from './private/Dashboard';
import DiscoverScreen   from './private/Discover';
import ProfileScreen  from './private/Profile';
import SettingsScreen   from './private/Settings';

//Utils
import mainStyles from '../utils/MainGlobalStyles';

import briefcaseActive  from './../assets/icons/briefcaseActive.png';
import briefcaseGrey    from './../assets/icons/briefcaseGrey.png';
import briefcaseWhite   from './../assets/icons/briefcaseWhite.png';

import heartActive      from './../assets/icons/heartActive.png';
import heartGrey        from './../assets/icons/heartGrey.png';
import heartWhite       from './../assets/icons/heartWhite.png';

import bookMarkActive   from './../assets/icons/bookmarkActive.png';
import bookMarkGrey     from './../assets/icons/bookmarkGrey.png';
import bookMarkWhite    from './../assets/icons/bookmarkWhite.png';

import settingsActive   from './../assets/icons/settingsActive.png';
import settingsGrey     from './../assets/icons/settingsGrey.png';

import bellActive       from './../assets/icons/bellActive.png';
import bellGrey         from './../assets/icons/bellGrey.png';
import bellWhite        from './../assets/icons/bellWhite.png';

import starWhite        from './../assets/icons/starWhite.png';

import homeActive       from './../assets/icons/homeActive.png';
import homeGrey         from './../assets/icons/homeGrey.png';

import userActive       from './../assets/icons/userActive.png';
import userGrey         from './../assets/icons/userGrey.png';

import search       from './../assets/icons/search.png';


export default function HomeScreen({ navigation }) {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
		        tabBarIcon: ({ focused, color, size }) => {
		            let iconName;

		            if (route.name === 'Dashboard') {
		              iconName = focused
		                ? homeActive
		                : homeGrey;
		            } else if (route.name === 'Discover') {
		                iconName = focused
		                ? search
		                : search;
		            } else if (route.name === 'Profile') {
		                iconName = focused
		                ? userActive
		                : userGrey;
		            } else if (route.name === 'Settings') {
		                iconName = focused
		                ? settingsActive
		                : settingsGrey;
		            }
		            // You can return any component that you like here!
		            // return <FontAwesome name={iconName} size={size} color={color} />;

		            return <Image source={iconName} size={size} color={color} style={{ 'width': 25, 'height': 25, resizeMode: 'contain' }} />
		        },
		        // headerShown: false,
				tabBarStyle: {
					// borderTopLeftRadius: 50,
					// borderTopRightRadius: 50,
					// backgroundColor: '#eee',
					// width: 350,
					// marginLeft: 'auto',
					// marginRight: 'auto',
					paddingTop: 5,
					borderColor: '#dddddd',
					borderBottomColor: 'transparent',
					borderWidth: 1,
					fontSize: 6,
				},
				// headerStyle: {
		  //           backgroundColor: '#000000',
		  //       },
	            tabBarActiveTintColor: '#cc0000',
	            tabBarInactiveTintColor: 'gray',
	            tabBarShowLabel: false,
	        })}>
	        <Tab.Screen name="Dashboard" component={DashboardScreen} />
	        <Tab.Screen name="Discover" component={DiscoverScreen} />
	        <Tab.Screen name="Profile" component={ProfileScreen} />
	        <Tab.Screen name="Settings" component={SettingsScreen} />
	    </Tab.Navigator>
	);
}







