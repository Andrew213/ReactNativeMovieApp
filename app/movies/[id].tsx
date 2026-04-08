import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { useFetchMovieDetail } from "@/api/hooks/query/useFecthFilmDetails";
import { icons } from "@/constants/icons";

interface MovieLabelProps {
  label: string;
  value?: string | number | null;
}

const MovieInfo: React.FC<MovieLabelProps> = ({ label, value }) => {
  return (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm mt-3 text-str ">
        {value}
      </Text>
    </View>
  );
};

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, isLoading } = useFetchMovieDetail(id as string);
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (!data) {
    return (
      <View className="flex-1 bg-primary items-center justify-center px-5">
        <Text className="text-white text-center">Movie not found</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar hidden />
      <View className="bg-primary flex-1">
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <View>
            <Image
              source={{ uri: data.poster!.url! }}
              className="w-full h-[550px]"
              resizeMode="stretch"
            />
          </View>
          <View className="flex-col items-start justify-center mt-5 px-5">
            <Text className="text-white font-bold text-xl">
              {data.name || data.alternativeName}
            </Text>
            {data.slogan && (
              <Text className="text-light-200 text-sm italic">
                {data.slogan}
              </Text>
            )}
            <View className="flex-row items-center gap-x-1 mt-2">
              {data.releaseYears && (
                <Text className="text-light-200 text-sm mr-3">
                  {data.releaseYears[0].start}
                </Text>
              )}
              <Text className="text-light-200 text-sm ">
                {data.seriesLength && `${data.seriesLength} series`}
                {data.movieLength && `${data.movieLength}m`}
              </Text>
            </View>
            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
              <Image source={icons.star} className="size-4" />
              <Text className="text-white font-bold text-sm">
                {data.rating?.imdb}
              </Text>
              <Text className="text-light-200 text-sm">
                {data.votes?.imdb && `(${data.votes.imdb} votes)`}
              </Text>
            </View>

            <MovieInfo
              label="Overview"
              value={data.description || "No description"}
            />

            <MovieInfo
              label="Genres"
              value={data.genres.map((g) => g.name).join("  ")}
            />
            <View className="flex flex-row justify-between w-1/2">
              {data.budget?.value && (
                <MovieInfo
                  label="Budget"
                  value={`${Number(data.budget.value).toLocaleString("ru-RU")} ${data.budget.currency}`}
                />
              )}
              {data.fees?.world && (
                <MovieInfo
                  label="Fees"
                  value={`${Number(data.fees.world.value).toLocaleString("ru-RU")} ${data.fees.world?.currency}`}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default MovieDetails;
