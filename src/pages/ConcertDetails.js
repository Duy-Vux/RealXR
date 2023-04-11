import React, { useEffect, useState, useContext } from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";

concert = {
  id: 0,
  artist: "JustinBieber",
  title: "Live Concert RealXR 1",
  price: 10,
};
export default class ConcertDetails extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/200/300" }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{concert.title}</Text>
            <Text style={styles.price}>$ {concert.price}</Text>
            <Text style={styles.description}>{concert.artist}</Text>
            <Button
              onPress={() => {
                this.props.navigation.navigate("Checkout");
              }}
              title="Add to cart"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#787878",
    marginBottom: 16,
  },
});
