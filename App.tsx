import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <StatusBar translucent style="light"></StatusBar>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
}
