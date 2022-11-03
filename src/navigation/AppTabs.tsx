import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import CreditScreen from "../screens/CreditScreen";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1b2230",
          borderColor: "#1b2230",
        },
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Accueil",
          tabBarIcon() {
            return (
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginBottom: 4,
                }}
                source={require("../assets/icons/home.png")}
                resizeMode="contain"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreditScreen"
        component={CreditScreen}
        options={{
          title: "Crédit",
          tabBarIcon() {
            return (
              <Image
                style={{
                  width: 16,
                  height: 16,
                  marginBottom: 4,
                }}
                source={require("../assets/icons/info.png")}
                resizeMode="contain"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;
