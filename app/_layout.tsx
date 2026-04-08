import { Stack } from "expo-router";

import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api/queryClient";
import * as SystemUI from "expo-system-ui";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

SystemUI.setBackgroundColorAsync("#030014");

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="movies/[id]"
            options={{
              headerShown: false,

              contentStyle: { backgroundColor: "#030014" },
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
