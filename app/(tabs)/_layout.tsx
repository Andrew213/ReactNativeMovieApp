import {
  View,
  Text,
  ImageBackground,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  focused: boolean;
  iconSrc: ImageSourcePropType;
  text: string;
}

const TabIcon = ({ text, iconSrc, focused }: Props) => {
  if (focused) {
    return (
      <ImageBackground
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image source={iconSrc} tintColor="#151312" className="size-5" />
        <Text className="text-secondary text-base font-semibold ml-2">
          {text}
        </Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={iconSrc} tintColor="#A8B5DB" className="size-5" />
      </View>
    );
  }
};

const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          },
          tabBarStyle: {
            backgroundColor: "#0F0D23",
            borderRadius: 50,
            marginHorizontal: 20,
            height: 52,
            position: "absolute",
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#0F0D23",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} text="Home" iconSrc={icons.home} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            title: "Search",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} text="Search" iconSrc={icons.search} />
            ),
          }}
        />
        <Tabs.Screen
          name="saved"
          options={{
            headerShown: false,
            title: "Saved",

            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} text="Saved" iconSrc={icons.save} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                text="Profile"
                iconSrc={icons.person}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default _layout;
