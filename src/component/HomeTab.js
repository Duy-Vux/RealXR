import UserProfile from "../pages/UserProfile";
import Discover from "../pages/Discover";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          title: "Orders",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="ticket-outline"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: "Checkout",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: "UserProfile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="account"
              size={size}
              color={color}
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
