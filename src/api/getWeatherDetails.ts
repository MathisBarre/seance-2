import { useQuery } from "@tanstack/react-query";
import { DayConditions } from "../types/weather.type";

export async function getWeatherDetails(
  searchQuery: string,
  date: string
): Promise<DayConditions> {
  const fetchResponse = await fetch(
    `https://weather-api.mathisbarre.com/${searchQuery}/${date}`
  );

  if (!fetchResponse.ok) {
    throw new Error("REQUEST_FAILED")
  }

  const jsonResponse: DayConditions = await fetchResponse.json();

  return jsonResponse;
}

export function useGetWeatherDetails(searchQuery: string, date: string) {
  return useQuery(["weatherDetails", searchQuery, date], () =>
    getWeatherDetails(searchQuery, date)
  );
}
