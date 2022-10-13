import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import splashScreen from "../../assets/splash.png";
import { useGetWeather } from "../api/getWeather";

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("nantes");
  const { isLoading, isError, data: weather } = useGetWeather(searchQuery);

  const hourlyWeather =
    weather !== undefined && weather.fcst_day_0?.hourly_data !== undefined
      ? Object.entries(weather.fcst_day_0.hourly_data).map(
          ([key, value]: [string, any]) => ({
            hour: key,
            ...value,
          })
        )
      : undefined;

  return (
    <ScrollView>
      <SafeAreaView style={{ flexGrow: 1 }}>
        <Image
          style={styles.backgroundImage}
          source={splashScreen}
          resizeMode="cover"
        ></Image>

        <View style={styles.container}>
          <TextInput
            value={searchQuery}
            onChangeText={(newValue) => setSearchQuery(newValue)}
            style={styles.input}
            placeholder="Recherche une localisation..."
          />

          <View
            style={{
              marginVertical: 16,
            }}
          >
            {isLoading && <Text>Chargement...</Text>}
            {hourlyWeather &&
              hourlyWeather.map((hourlyWeather, index) => {
                return (
                  <View key={hourlyWeather.hour}>
                    <Text>
                      {hourlyWeather.hour} - {hourlyWeather.CONDITION} -{" "}
                      {hourlyWeather.TMP2m} C
                    </Text>
                    {hourlyWeather.length !== index && (
                      <View style={styles.divider} />
                    )}
                  </View>
                );
              })}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    objectFit: "cover",
    height: 100,
    width: "100%",
  },
  container: {
    padding: 16,
  },
  input: {
    width: "100%",
    backgroundColor: "#d6d3d1",
    padding: 8,
  },
  divider: {
    width: "100%",
    backgroundColor: "#d6d3d1",
    height: 1,
    marginVertical: 4,
  },
});
