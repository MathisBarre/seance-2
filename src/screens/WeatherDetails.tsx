import React, { Fragment } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGetWeather } from "../api/getWeather";

interface WeatherDetailsProps {}

const WeatherDetails = ({}: WeatherDetailsProps) => {
  const {
    isLoading,
    isError,
    data: weather,
    refetch,
  } = useGetWeather("nantes");

  if (isLoading) {
    return (
      <View
        style={{
          backgroundColor: "#000918",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <ActivityIndicator size={"large"}></ActivityIndicator>
      </View>
    );
  }

  if (isError) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "#000918",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Erreur
        </Text>
        <Button title="Réessayer ?" onPress={() => refetch()}></Button>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "#000918",
      }}
    >
      <View style={{
        padding: 24
      }}>
        {weather.next5DaysConditions[0].hourly.map((conditions, index) => {
          return (
            <Fragment key={conditions.datetime}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 24,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  {new Date(conditions.datetime).toLocaleTimeString("fr-FR", {timeStyle: "short"})}
                </Text>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: conditions.icon, height: 32, width: 32 }}
                    resizeMode="contain"
                    style={{ marginRight: 16 }}
                  />
                  <Text
                    style={{
                      color: "white",
                      textTransform: "capitalize",
                      textAlign: "right",
                      opacity: 0.5,
                    }}
                  >
                    {conditions.condition}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "right",
                  }}
                >
                  {conditions.temperature.value}
                  {conditions.temperature.unit}
                </Text>
              </View>
              {weather.next5DaysConditions.length - 1 !== index && (
                <View
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "white",
                    opacity: 0.1,
                  }}
                />
              )}
            </Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default WeatherDetails;
