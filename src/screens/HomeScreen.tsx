import React, { Fragment, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import splashScreen from "../../assets/splash.png";
import { useGetWeather } from "../api/getWeather";
import windIcon from "../assets/icons/wind.png"
import rainIcon from "../assets/icons/rain.png"
import humidityIcon from "../assets/icons/humidity.png"
import sunIcon from "../assets/icons/sun.png"
import { useNavigation } from "@react-navigation/native";

interface HomeScreenProps {}

const HomeScreen = ({}: HomeScreenProps) => {
  const [searchQuery, setSearchQuery] = useState("nantes");
  const { isLoading, isError, data: weather, refetch } = useGetWeather("nantes");
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation()

  if (isLoading) {
    return (
      <View
        style={{
          backgroundColor: "#000918",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"}></ActivityIndicator>
      </View>
    );
  }

  if (isError || !weather)  {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "#000918",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Erreur</Text>
        <Button title="Réessayer ?" onPress={() => refetch()}></Button>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#000918",
        flexGrow: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF1A",
          paddingTop: top + 24,
          borderBottomRightRadius: 24,
          borderBottomLeftRadius: 24,
          padding: 24,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: weather?.currentConditions?.iconBig || "",
                height: 96,
                width: 96,
              }}
            ></Image>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 18,
                marginBottom: 4,
              }}
            >
              Actuellement
            </Text>
            <Text
              style={{
                fontSize: 32,
                fontWeight: "700",
                color: "white",
              }}
            >
              {weather.currentConditions.temperature.value}
              {weather.currentConditions.temperature.unit}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 32,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: "white",
                marginBottom: 4,
              }}
            ></View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {weather.currentConditions.windSpeed.value}{" "}
              {weather.currentConditions.windSpeed.unit}
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 10,
                opacity: 0.75,
              }}
            >
              Vent
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: "white",
                marginBottom: 4,
              }}
            ></View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              {weather.currentConditions.humidity.value}{" "}
              {weather.currentConditions.humidity.unit}
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 10,
                opacity: 0.75,
              }}
            >
              Humidité
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: "white",
                marginBottom: 4,
              }}
            ></View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              XX {weather.currentConditions.humidity.unit}
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 10,
                opacity: 0.75,
              }}
            >
              Pluie
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor: "white",
                marginBottom: 4,
              }}
            ></View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 14,
                fontWeight: "600",
              }}
            >
              XX {weather.currentConditions.humidity.unit}
            </Text>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 10,
                opacity: 0.75,
              }}
            >
              UV
            </Text>
          </View>
        </View>
      </View>
      <SafeAreaView edges={["bottom"]} style={{ flexGrow: 1, padding: 24 }}>
        {weather.next5DaysConditions.map((conditions, index) => {
          return (
            <Fragment key={conditions.date}>
              <TouchableOpacity
              // @ts-ignore
                onPress={() => navigation.navigate("WeatherDetails")}
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
                  {new Date(conditions.date).toLocaleDateString("fr-FR", {
                    weekday: "short",
                  })}
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
                  max. {conditions.temperature.max}
                  {conditions.temperature.unit}
                </Text>
              </TouchableOpacity>
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
      </SafeAreaView>
    </View>
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
    paddingHorizontal: 16,
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
