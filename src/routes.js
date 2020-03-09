import React from 'react';
import { Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import logo from './assets/instagram.png';
import Feed from './screens/Feed';


const Routes = createAppContainer(
	createStackNavigator({
		Feed
	},{
		defaultNavigationOptions:{
			headerTitle: ()=> <Image sorce={logo} />,
			headerStyle: {
				backgroundColor: '#f8f8f8'
			}
		}
	}
	)
);

export default Routes;