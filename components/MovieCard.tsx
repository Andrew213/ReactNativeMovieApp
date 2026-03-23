import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MovieItem } from "@/api/types";
import { Link } from "expo-router";
import { icons } from "@/constants/icons";

const MovieCard: React.FC<MovieItem> = ({
  id,
  alternativeName,
  poster,
  name,
  year,
  rating,
}) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri:
              poster?.previewUrl ||
              poster?.url ||
              "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>
          {name || alternativeName}
        </Text>
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {rating?.imdb}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {year}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
    // <View>
    //   <Text className='text-white text-sm'>MovieCard</Text>
    // </View>
  );
};

export default MovieCard;
