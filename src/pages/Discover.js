import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView} from "react-native";
import ConcertCard from "../component/ConcertCard";

export default class Discover extends React.Component {
  render() {
    return (
      <>
        <ScrollView>
          <View style={{ marginTop: 40, paddingTop: 50}}>
            <Text style={{paddingBottom: 20}}>Discover Page</Text>
            <Text>Trending</Text>
          </View>
          <ConcertCard></ConcertCard>
          <View style={{ marginTop: 40 }}>
            <Text>Live</Text>
          </View>
          <ConcertCard></ConcertCard>
          <View style={{ marginTop: 40 }}>
            <Text>Upcoming</Text>
          </View>
          <ConcertCard></ConcertCard>
          <View style={{ marginTop: 40 }}>
            <Text>Suggested Artist</Text>
          </View>
          <ConcertCard></ConcertCard>
        </ScrollView>

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
