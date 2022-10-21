import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreditScreen from '../screens/CreditScreen';
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="CreditScreen" component={CreditScreen} />
    </Tab.Navigator>
  );
}

export default AppTabs