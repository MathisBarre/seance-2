import React from "react"
import HomeScreen from './src/screens/HomeScreen';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppTabs from "./src/navigation/AppTabs";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}