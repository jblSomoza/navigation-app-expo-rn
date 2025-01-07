import { View, Text } from "react-native";
import React from "react";
import { Stack, useNavigation, useRouter } from "expo-router";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = (canGoBack: boolean) => {

    if(canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack = false }) => (
          <Ionicons
            name={canGoBack ? "chevron-back" : "menu"}
            size={24}
            color={tintColor}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          animation: "flip",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos Screen",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
