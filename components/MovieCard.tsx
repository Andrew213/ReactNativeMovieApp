import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MovieItem } from "@/api/types";
import { Link } from "expo-router";

const MovieCard: React.FC<MovieItem> = ({
  id,
  alternativeName,
  poster,
  releaseYears,
  votes,
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
        <Text className="text-sm font-bold text-white mt-2">
          {alternativeName}
        </Text>
      </TouchableOpacity>
    </Link>
    // <View>
    //   <Text className='text-white text-sm'>MovieCard</Text>
    // </View>
  );
};

export default MovieCard;
