import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import ConcertCard from "../component/ConcertCard";

export default class Artist extends React.Component {
  render() {
    const upcomingConcertCardList = [
      {
        id: 0,
        artist: "JustinBieber",
        title: "Live Concert RealXR 1",
      },
      {
        id: 1,
        artist: "SelenaGomez",
        title: "Live Concert RealXR 2",
      },
      {
        id: 2,
        artist: "JustinBieber",
        title: "Live Concert RealXR 3",
      },
      {
        id: 3,
        artist: "JustinBieber",
        title: "Live Concert RealXR 4",
      },
    ];
    const pastConcertCardList = [
      {
        id: 0,
        artist: "JustinBieber",
        title: "Concert",
      },
      {
        id: 1,
        artist: "JustinBieber",
        title: "Concert 2",
      },
      {
        id: 2,
        artist: "JustinBieber",
        title: "Concert3",
      },
      {
        id: 3,
        artist: "JustinBieber",
        title: "4",
      },
    ];
    const upcomingConcerts = upcomingConcertCardList.map((concert) => (
      <ConcertCard
        artist={concert.artist}
        title={concert.title}
        imageSize="large"
      ></ConcertCard>
    ));
    const pastConcerts = pastConcertCardList.map((concert) => (
      <ConcertCard
        artist={concert.artist}
        title={concert.title}
        imageSize="large"
      ></ConcertCard>
    ));
    return (
      <>
        <View style={{ marginTop: 50, marginLeft: 20 }}>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text>Justin Bieber</Text>
        </View>
        <ScrollView>
          <View style={{ marginTop: 40 }}>
            <Text>Upcoming Concert</Text>
            {upcomingConcerts}
          </View>
          <View style={{ marginTop: 40 }}>
            <Text>Past Concert</Text>
            {pastConcerts}
          </View>
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
