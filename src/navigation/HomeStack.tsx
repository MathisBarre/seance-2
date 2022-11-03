import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WeatherDetails from "../screens/WeatherDayDetailsScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WeatherDetails"
        component={WeatherDetails}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1b2230",
          },
          headerTitleStyle: {
            color: "white",
          },
          headerTintColor: "white"
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
