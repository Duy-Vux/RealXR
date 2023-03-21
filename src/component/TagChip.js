import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default class TagChip extends React.Component {
  render() {
    return <Text style={styles.textStyle}>{this.props.text}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 4,
    backgroundColor: "#323234",
    alignSelf: "flex-start",
    borderRadius: 8,
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: "#ffffff",
  },
});
