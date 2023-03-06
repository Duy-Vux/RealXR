import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Notification from "./src/component/Notification.js";
import { Panel, Form, FormGroup, FormControl, Button } from "react-bootstrap";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello- julian RealXR</Text>
        <StatusBar style="auto" />
      </View>
      <Notification />
      <FormGroup controlId="formEmail">
        <FormControl type="email" placeholder="Email Address" />
      </FormGroup>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    backgroundColor: "red",
  },
});
