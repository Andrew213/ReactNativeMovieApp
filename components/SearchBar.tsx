import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar: React.FC<Props> = ({
  onPress,
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-3">
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  );
};

export default SearchBar;
