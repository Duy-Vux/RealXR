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

const ConcertRow = ({ concerts, navigation }) => (
  <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
    {concerts.map((concert) => (
      <TouchableOpacity
        key={concert}
        onPress={() => {
          navigation.navigate("ConcertDetails");
        }}
      >
        <ConcertCard />
      </TouchableOpacity>
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
            <View style={{ marginTop: 20, paddingTop: 20 }}>
              <Text style={{ paddingBottom: 20, fontSize: 40 }}>
                Discover Concerts
              </Text>
            </View>
          )}
          renderItem={({ item }) => (
            <View style={{ marginTop: 40 }}>
              <Text>{item.title}</Text>
              <ConcertRow
                concerts={item.concerts}
                navigation={this.props.navigation}
              />
            </View>
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
  header: {},
});
