import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Explore from '../screens/Explore'
import Trips from '../screens/Trips'
import Saved from '../screens/Saved'
import Inbox from '../screens/Inbox'

const Tab =  createBottomTabNavigator()
  

export default function MainNav() {
  return (
    <NavigationContainer>
      <Tab.Navigator 

    screenOptions = { ({route}) => ({
      tabBarIcon : ({focused, color, size}) =>
      {
        let iconName = '';
        if(route.name === 'Explore'){
          iconName = focused ? 'home' : 'home-outline'
        }
        else if(route.name === 'Saved'){
          iconName = focused ? 'content-save' : 'content-save-outline'
        }
        else if(route.name === 'Trips'){
          iconName = focused ? 'map-check' : 'map-check-outline'
        }
        else if (route.name === 'Inbox'){
          iconName = focused ? 'message' : 'message-outline'
        }

        return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
      }
      
    }) }

      tabBarOptions={{
        activeTintColor:'#0275d8',
        inactiveTintColor: 'grey'
      }}
      >
        <Tab.Screen name='Explore' component={Explore} />
        <Tab.Screen name='Saved' component={Saved} />
        <Tab.Screen name='Trips' component={Trips} />
        <Tab.Screen name='Inbox' component={Inbox} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
