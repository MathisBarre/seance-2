import {useQuery} from "@tanstack/react-query"

export async function getWeather(searchQuery: string) {
  const fetchResponse = await fetch(
    `https://www.prevision-meteo.ch/services/json/${searchQuery}`
  );

  const jsonResponse = fetchResponse.json()

  return jsonResponse
}

export function useGetWeather(searchQuery: string) {
  return useQuery(["weather", searchQuery], () => getWeather(searchQuery))
}