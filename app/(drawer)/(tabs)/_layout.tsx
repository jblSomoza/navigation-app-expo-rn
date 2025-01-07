import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // headerShown: false,
        // tabBarStyle: { backgroundColor: "white" },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Cart",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="cart-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home/index"
        options={{
          // tabBarShowLabel: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
