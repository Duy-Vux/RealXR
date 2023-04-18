import React from "react";
import Container from "../component/Container";
import Label from "../component/Label";
import ScreenHeader from "../component/ScreenHeader";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import LoginScreen, { SocialButton } from "react-native-login-screen";

export default function Orders({ navigation }) {
  const OrderCard = ({ item }) => {
    const { label, amount, status, color } = item;
    return (
      <View style={styles.contentContiner}>
        <View>
          <Label text={label} style={{ fontSize: 18, fontWeight: "500" }} />
          <Label text={amount} style={{}} />

          <Pressable
            style={{
              borderRadius: 3,
              width: "85%",
              paddingVertical: 10,
              paddingHorizontal: "10%",
              backgroundColor: color,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/*
            <Label
              text={status}
              style={{fontSize: '14', color: "#FFFFFF"}}
          />*/}
            <TouchableOpacity>
              <Label text={status} style={styles.ButtonText} />
            </TouchableOpacity>
          </Pressable>
        </View>

        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 25,
            marginLeft: 4,
            marginLeft: "20%",
          }}
        />

        <View
          key={item}
          style={{
            height: 35,
            width: 35,
            marginLeft: 4,
            borderRadius: 3,
          }}
        />
      </View>
    );
  };
  return (
    <Container>
      {/*<ScreenHeader navigation={navigation} label="Past Orders" />*/}

      <View style={{ paddingVertical: 20, alignItems: "center" }}>
        <Label
          text="Orders"
          style={{ opacity: 0.5, fontSize: 34, color: "#000000" }}
        />
      </View>

      <ScrollView>
        <View style={{ paddingVertical: 20 }}>
          <Label text="Jan 10, 2023" style={{ opacity: 0.5, fontSize: 13 }} />
        </View>
        <OrderCard
          item={{
            label: "Justin Tim",
            amount: "$40",
            status: "Join Concert",
            color: "green",
          }}
        />

        <View style={{ paddingVertical: 20 }}>
          <Label text="Jun 18th, 2022" style={{ opacity: 0.5, fontSize: 13 }} />
        </View>
        <OrderCard
          item={{
            label: "Selena Gomez",
            amount: "$34",
            status: "  Upcoming  ",
            color: "#0063ff",
          }}
        />

        <View style={{ paddingVertical: 20 }}>
          <Label
            text="April 23rd, 2021"
            style={{ opacity: 0.5, fontSize: 13 }}
          />
        </View>
        <OrderCard
          item={{
            label: "Adele",
            amount: "$50",
            status: "    Expired     ",
            color: "#ee0000",
          }}
        />

        <View style={{ paddingVertical: 20 }}>
          <Label
            text="January 4th, 2021"
            style={{ opacity: 0.5, fontSize: 13 }}
          />
        </View>
        <OrderCard
          item={{
            label: "Weekend",
            amount: "$50",
            status: "    Expired     ",
            color: "#ee0000",
          }}
        />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  contentContiner: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff" /*#4937f5 */,
    paddingHorizontal: 20,
  },
  Button: {
    padding: 5,
  },

  ButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});
