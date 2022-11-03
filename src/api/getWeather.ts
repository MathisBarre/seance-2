import { useQuery } from "@tanstack/react-query";
import { Weather } from "../types/weather.type";

export async function getWeather(searchQuery: string): Promise<Weather> {
  const fetchResponse = await fetch(
    `https://weather-api.mathisbarre.com/${searchQuery}`
  );

  const jsonResponse: Weather = await fetchResponse.json();

  return jsonResponse;
}

export function useGetWeather(searchQuery: string) {
  return useQuery(["weather", searchQuery], () => getWeather(searchQuery));
}
