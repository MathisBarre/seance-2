import React from "react"
import HomeScreen from './src/screens/HomeScreen';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppTabs from "./src/navigation/AppTabs";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppTabs />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}