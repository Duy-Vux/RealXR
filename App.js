import { View, StyleSheet, CheckBox } from "react-native-web";
import Login from "./src/pages/Login";
import Artist from "./src/pages/Artist";
import Discover from "./src/pages/Discover";
import Orders from "./src/pages/Orders";
import ConcertDetails from "./src/pages/ConcertDetails";
import Checkout from "./src/pages/Checkout";
import UserProfile from "./src/pages/UserProfile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Artist"
          component={Artist}
          options={{ title: "Artist" }}
        />
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={{ title: "Discover" }}
        />
        <Stack.Screen
          name="ConcertDetails"
          component={ConcertDetails}
          options={{ title: "ConcertDetails" }}
        />

        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ title: "Orders" }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ title: "UserProfile" }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ title: "Checkout" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
