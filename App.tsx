import React from "react"
import HomeScreen from './src/screens/HomeScreen';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient()

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}