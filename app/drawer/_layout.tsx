import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          overlayColor: 'rgba(0,0,0,0.4)', // This is the color of the overlay when the drawer is open
          drawerActiveTintColor: 'indigo', // This is the color of the text when the drawer is open
          sceneStyle: {
            backgroundColor: 'white', // This is the background color of the drawer
          },
          headerShadowVisible: false
        }}
      >
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color}  size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Schedule',
            title: 'Horarios',
            drawerIcon: () => (
              <Ionicons name="calendar" size={24} color="black" />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout