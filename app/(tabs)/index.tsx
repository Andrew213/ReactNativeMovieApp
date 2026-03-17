import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-red-200 text-red-600">asd.</Text>
      <Link href={"/onboarding"}>Onboarding</Link>
      <Link
        href={{
          pathname: "/movies/[id]",
          params: { id: "avengers" },
        }}
      >
        Avg
      </Link>
    </View>
  );
}
