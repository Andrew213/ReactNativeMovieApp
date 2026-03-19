import { Stack } from "expo-router";

import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
