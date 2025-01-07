import { Link, router } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/shared/CustomButton";


const HomeScreen = () => {
  return (
    <SafeAreaView className="px-10 mt-5">
      <View>

        <Text className="text-2xl font-bold text-center">Welcome to Expo Router</Text>
        <Text className="text-center mt-2">A simple and easy to use routing library for React Native</Text>

        <CustomButton
          className="mt-5"
          onPress={() => router.navigate("/drawer/tabs/(stack)/products")}
          color="primary"
        >
          Products
        </CustomButton>

        <CustomButton
          className="mt-2"
          onPress={() => router.navigate("/drawer/tabs/(stack)/profile")}
          color="secondary"
        >
          Products
        </CustomButton>

        <CustomButton
          className="mt-2"
          variant="text-only"
          onPress={() => router.navigate("/drawer/tabs/(stack)/settings")}
          color="tertiary"
        >
          Settings
        </CustomButton>

        <Link
          href={'/drawer/tabs/products'} asChild
        >
          <CustomButton variant="text-only" color="primary" className="mt-2">
            Products
          </CustomButton>
        </Link>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
