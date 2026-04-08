import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";

import React, { useEffect, useRef, useState } from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { useSearchFilms } from "@/api/hooks/query/useSearchFilms";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { useFocusEffect } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { updateSearchCount } from "@/appwrite/appwrite";
import { useDebounce } from "use-debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<TextInput>(null);

  const insets = useSafeAreaInsets();

  useFocusEffect(
    React.useCallback(() => {
      // https://reactnavigation.org/docs/use-focus-effect/
      const timeout = setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 200);
      return () => {
        clearTimeout(timeout);
      };
    }, []),
  );

  const [debouncedQ] = useDebounce(value ?? "", 500);
  const trimmed = debouncedQ.trim();
  const { data, isLoading, error, isSuccess } = useSearchFilms(trimmed);

  useEffect(() => {
    const firstMovie = data?.docs?.[0];
    if (trimmed.length <= 3 || !firstMovie) return;

    updateSearchCount(firstMovie);
  }, [trimmed, data?.docs?.[0]?.id]);
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full z-0"
        resizeMode="cover"
      />

      <View style={{ flex: 1 }}>
        <View className="mt-20 px-5 mb-5 ">
          <View className="w-full flex-row justify-center mb-5">
            <Image source={icons.logo} className="w-12 h-10" />
          </View>
          <SearchBar
            placeholder="Search for a movies"
            onChangeText={setValue}
            ref={inputRef}
          />
        </View>

        <FlatList
          data={data?.docs}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            marginBottom: 10,
          }}
          contentContainerStyle={{
            paddingBottom: insets.bottom + 50,
          }}
          className="px-5 "
          ListHeaderComponent={
            <>
              {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
            </>
          }
          ListEmptyComponent={
            !isLoading && !error ? (
              <View className="mt-10">
                <Text className="text-center text-gray-500">
                  {value.trim() ? "No movies found" : "Search for a movie"}
                </Text>
              </View>
            ) : null
          }
        />
      </View>
    </View>
  );
};

export default Search;
