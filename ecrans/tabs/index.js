import { View, Text } from 'react-native'
import React from 'react'
import Home from '../Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Messages from '../Messages';
import Settings from '../Setting';
const BottomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="tabs_home"
        component={Home}
        options={{
          tabBarLabel: 'Dashbord',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Messages}
        options={{
          tabBarLabel: 'Message',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
          //tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Parametre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs