import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WeatherDetails from "../screens/WeatherDetails";

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
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
