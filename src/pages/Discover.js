import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DiscoverCard from "../component/DiscoverCard";

export default class Discover extends React.Component {
  render() {
    const discoverCardList = [{}, {}, {}];
    return (
      <>
        <DiscoverCard></DiscoverCard>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <StatusBar style="auto" />
        </View>
      </>
    );
  }
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
