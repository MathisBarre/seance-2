import React from "react"
import HomeScreen from './src/screens/HomeScreen';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}