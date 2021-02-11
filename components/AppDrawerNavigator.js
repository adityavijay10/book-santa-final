import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/RecievedBooksScreen'
import{Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
        drawerIcon:<Icon  name= "home" type = "font-awesome-5"/>
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{
        drawerIcon:<Icon  name= "gift" type = "font-awesome"/>,
        drawerLabel:"My Donations"
    }

  },
  ReceivedBooks:{
    screen: MyReceivedBooksScreen,
    navigationOptions:{
        drawerIcon:<Icon  name= "gift" type = "font-awesome"/>,
        drawerLabel:"My Recieved Books"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
        drawerIcon:<Icon  name= "bell" type = "font-awesome"/>,
        drawerLabel : "Notifications"  
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
        drawerIcon:<Icon  name= "home" type = "font-awesome-5"/>,
        drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
