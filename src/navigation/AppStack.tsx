import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WeatherDetails from "../screens/WeatherDayDetailsScreen";
import AppTabs from "./AppTabs";

const Stack = createNativeStackNavigator();

function AppStack() {
  const hasSearchQuery = true;

  return (
    <Stack.Navigator>
      {hasSearchQuery ? (
        <Stack.Screen
          name="AppTab"
          component={AppTabs}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

export default AppStack;
