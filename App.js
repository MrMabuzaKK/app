import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// Screens
import HomeScreen from './screens/Home';
import LoginScreen from './screens/auth/Login';
import RegisterScreen from './screens/auth/Register';
import CoursesScreen from './screens/private/Courses';
import MarketingScreen from './screens/private/Marketing';
import BookingsScreen from './screens/private/Bookings';
import NotificationsScreen from './screens/private/Notifications';
import DiscoverScreen from './screens/private/Discover';
import ChatScreen from './screens/private/Chat';
import FAQScreen from './screens/private/FAQ';
import EventsScreen from './screens/private/Events';
import MasterClassScreen from './screens/private/MasterClass';
import PodcastScreen from './screens/private/Podcast';

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
			        headerTintColor: '#000000',
			        headerTitleStyle: {
			            fontWeight: 'thin',
			        },
			        headerBackTitle: 'Back'
			    }}>

			    {/*Public Views*/}
				<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}  />
				<Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
			{/*Private Views*/}
				<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
				<Stack.Screen name="Courses" component={CoursesScreen} />
				<Stack.Screen name="Marketing" component={MarketingScreen} />
				<Stack.Screen name="Bookings" component={BookingsScreen} />
				<Stack.Screen name="Notifications" component={NotificationsScreen} />
				<Stack.Screen name="Discover" component={DiscoverScreen} />
				<Stack.Screen name="Chat" component={ChatScreen} />
				<Stack.Screen name="FAQ" component={FAQScreen} />
				<Stack.Screen name="Events" component={EventsScreen} />
				<Stack.Screen name="Logout" component={LoginScreen} />
				<Stack.Screen name="Podcast" component={PodcastScreen} />
				<Stack.Screen name="MasterClass" component={MasterClassScreen} />


			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;