import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import ConcertCard from "../component/ConcertCard";

const data = [
  {
    id: "5",
    title: "Featured Artist",
    concerts: [13, 14, 15, 1, 2, 3],
    showBigImage: false,
  },
  { id: "1", title: "Trending", concerts: [1, 2, 3], showBigImage: true },
  { id: "2", title: "Live", concerts: [4, 5, 6], showBigImage: true },
  { id: "3", title: "Upcoming", concerts: [7, 8, 9], showBigImage: true },
  {
    id: "4",
    title: "Suggested Artist",
    concerts: [10, 11, 12],
    showBigImage: true,
  },
];

const ConcertRow = ({ concerts, navigation }) => (
  <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
    {concerts.map((concert, index) => (
      <ConcertCard
        title="Test Concert"
        artist="Random Artist"
        navigation={navigation}
        key={index}
      />
    ))}
  </ScrollView>
);

export default class Discover extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => (
              <View style={{ marginTop: 10, paddingTop: 10 }}>
                <Text
                  style={{
                    fontSize: 40,
                    textAlign: "center",
                    fontFamily: "Cochin",
                    fontWeight: "bold",
                  }}
                >
                  Discover Concerts
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  marginTop: 40,
                  backgroundColor: "#ffffff",
                  paddingLeft: 10,
                  paddingBottom: 10,
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{
                    paddingLeft: 15,
                    fontSize: 25,
                    paddingTop: 10,
                    fontFamily: "Cochin",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Text>
                {item.showBigImage ? (
                  <ConcertRow
                    concerts={item.concerts}
                    navigation={this.props.navigation}
                  />
                ) : (
                  <ScrollView horizontal style={{ paddingHorizontal: 10 }}>
                    {item.concerts.map((concert) => (
                      <TouchableOpacity
                        key={concert}
                        onPress={() => {
                          this.props.navigation.navigate("Artist");
                        }}
                        style={{ marginRight: 25 }}
                      >
                        <View
                          style={{
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            backgroundColor: "gray",
                          }}
                        />
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
              </View>
            )}
          />
          <StatusBar style="auto" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    backgroundColor: "red",
  },
  header: {},
});
