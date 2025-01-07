import { Link, router, useNavigation } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";


const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView className="px-10 mt-5">
      <View>

        <Text className="text-2xl font-bold text-center">Welcome to Expo Router</Text>
        <Text className="text-center mt-2">A simple and easy to use routing library for React Native</Text>

        <CustomButton
          className="mt-5"
          onPress={() => router.navigate("/products")}
          color="primary"
        >
          Products
        </CustomButton>

        <CustomButton
          className="mt-2"
          onPress={() => router.navigate("/profile")}
          color="secondary"
        >
          Products
        </CustomButton>

        <CustomButton
          className="mt-2"
          variant="text-only"
          onPress={() => router.navigate("/settings")}
          color="tertiary"
        >
          Settings
        </CustomButton>

        <Link
          href={'/products'} asChild
        >
          <CustomButton variant="text-only" color="primary" className="mt-2">
            Products
          </CustomButton>
        </Link>

        <CustomButton color="primary" className="mt-2" onPress={onToggleDrawer}>
          Abrir Menu
        </CustomButton>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
