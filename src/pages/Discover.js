import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import ConcertCard from "../component/ConcertCard";

const data = [
  { id: "1", title: "Trending", concerts: [1, 2, 3] },
  { id: "2", title: "Live", concerts: [4, 5, 6] },
  { id: "3", title: "Upcoming", concerts: [7, 8, 9] },
  { id: "4", title: "Suggested Artist", concerts: [10, 11, 12] },
];

const ConcertRow = ({ concerts }) => (
  <ScrollView horizontal>
    {concerts.map((concert) => (
      <ConcertCard key={concert} />
    ))}
  </ScrollView>
);

export default class Discover extends React.Component {
  render() {
    return (
      <>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={{ marginTop: 40, paddingTop: 50 }}>
              <Text style={{ paddingBottom: 20 }}>Discover Page</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Artist");
              }}
            >
              <View style={{ marginTop: 40 }}>
                <Text>{item.title}</Text>
                <ConcertRow concerts={item.concerts} />
              </View>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="auto" />
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
