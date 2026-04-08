import { useFetchMoviesList } from "@/api/hooks/query/useFetchFilmsList";
import { useFetchTrandingFilms } from "@/api/hooks/query/useFetchTrandingMovies";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrandingCard from "@/components/TrandingCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const { data: trendingData, isLoading: trendingLoading } =
    useFetchTrandingFilms();

  const { data, isLoading } = useFetchMoviesList();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View className="px-5 pt-20">
        <Image source={icons.logo} className="w-12 h-10 mb-5 mx-auto" />

        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a movie"
        />
      </View>

      {isLoading || trendingLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : (
        <FlatList
          data={data?.docs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieCard {...item} />}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 120 }}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          ListHeaderComponent={
            <>
              {!!trendingData?.length && (
                <View className="mt-5">
                  <Text className="text-lg text-white font-bold mb-3">
                    Trending movies
                  </Text>

                  <FlatList
                    data={trendingData}
                    horizontal
                    ItemSeparatorComponent={() => <View className="w-5" />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) =>
                      item.movie_id.toString?.() ?? index.toString()
                    }
                    renderItem={({ item, index }) => (
                      <TrandingCard movie={item} index={index} />
                    )}
                  />
                </View>
              )}

              <Text className="text-lg text-white font-bold my-5">
                Latest Movies
              </Text>
            </>
          }
        />
      )}
    </View>
  );
}
