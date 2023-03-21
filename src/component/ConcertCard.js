import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TagChip from "./TagChip";

export default class ConcertCard extends React.Component {
  render() {
    return (
      <>
        <View style={{ marginTop: 16 }}>
          <Text>{this.props.header}</Text>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <View>
              <View>
                <Image
                  source={{ uri: "https://picsum.photos/200/300" }}
                  style={{
                    height: this.props.imageSize === "large" ? 220 : 180,
                    width: this.props.imageSize === "large" ? 390 : 300,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={{ uri: "https://picsum.photos/200/300" }}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                  />
                  <View style={{ marginLeft: 8 }}>
                    <Text style={styles.channelText}>{this.props.artist}</Text>
                    <Text style={{ fontSize: 12 }}>{this.props.title}</Text>
                    <TagChip text="English" />
                  </View>
                </View>

                {this.props.showOptions === false ? (
                  <></>
                ) : (
                  <MaterialCommunityIcons
                    name={"dots-vertical"}
                    color={"#ffffff"}
                    size={22}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  channelText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000000",
  },
});
