import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

//Assets
import avator from '../../assets/Layer-2.png';
//Utils
import mainStyles from '../../utils/MainGlobalStyles';

import briefcaseActive  from '../../assets/icons/briefcaseActive.png';
import briefcaseGrey    from '../../assets/icons/briefcaseGrey.png';
import briefcaseWhite   from '../../assets/icons/briefcaseWhite.png';

import heartActive      from '../../assets/icons/heartActive.png';
import heartGrey        from '../../assets/icons/heartGrey.png';
import heartWhite       from '../../assets/icons/heartWhite.png';

import bookMarkActive   from '../../assets/icons/bookmarkActive.png';
import bookMarkGrey     from '../../assets/icons/bookmarkGrey.png';
import bookMarkWhite    from '../../assets/icons/bookmarkWhite.png';

import settingsActive   from '../../assets/icons/settingsActive.png';
import settingsGrey     from '../../assets/icons/settingsGrey.png';

import bellActive       from '../../assets/icons/bellActive.png';
import bellGrey         from '../../assets/icons/bellGrey.png';
import bellWhite        from '../../assets/icons/bellWhite.png';

import starWhite        from '../../assets/icons/starWhite.png';

import homeActive       from '../../assets/icons/homeActive.png';
import homeGrey         from '../../assets/icons/homeGrey.png';
import booking         from '../../assets/icons/booking.png';

import userActive       from '../../assets/icons/userActive.png';
import userGrey         from '../../assets/icons/userGrey.png';
import courses 			from '../../assets/icons/courses.png'

import events         from '../../assets/icons/events.png';
import market         from '../../assets/icons/market.png';
import fqa         from '../../assets/icons/fqa.png';

import chat         from '../../assets/icons/chat.png';
import podcast         from '../../assets/icons/podcast.png';
import masterclass         from '../../assets/icons/masterclass.png';

import tips         from '../../assets/icons/tips.png';
import logout         from '../../assets/icons/logout.png';
import about         from '../../assets/icons/about.png';


function Dashboard({ navigation }) {
	return (
			<View>
				<View styles={{ 'width': 300, 'height': 300, 'backgroundColor':'#000000'}}>
					<Image source={avator} style={mainStyles.avator} />
				</View>
				<Text style={mainStyles.title}>Hi, Kulani</Text>
				<Text style={mainStyles.subtitle}>Welcome to Sell Smarter</Text>
				<View style={mainStyles.features}>

					<TouchableOpacity onPress={() => navigation.navigate('MasterClass')}>
						<Image source={masterclass} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>MasterClass</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Marketing')}>
						<Image source={market} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Market</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Bookings')}>
						<Image source={booking} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Bookings</Text>
					</TouchableOpacity>

				</View>
				<View style={mainStyles.features}>

					<TouchableOpacity onPress={() => navigation.navigate('Courses')}>
						<Image source={courses} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Courses</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Podcast')}>
						<Image source={podcast} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Podcast</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Events')}>
						<Image source={events} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Events</Text>
					</TouchableOpacity>


				</View>
					<View style={mainStyles.features}>

					<TouchableOpacity onPress={() => navigation.navigate('Chat')}>
						<Image source={chat} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Chat</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('About')}>
						<Image source={about} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>About</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
						<Image source={fqa} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>FAQ</Text>
					</TouchableOpacity>

				</View>

					<View style={mainStyles.features}>


					<TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
						<Image source={bellActive} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Notify</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Sales Tips')}>
						<Image source={tips} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Sales Tips</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={() => navigation.navigate('Login')}>
						<Image source={logout} style={mainStyles.featuresIcon}/>
						<Text style={mainStyles.featureTitle}>Logout</Text>
					</TouchableOpacity>

				</View>


			</View>
	)
}

export default Dashboard