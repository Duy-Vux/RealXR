import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProfilePic from "../component/ProfilePic";

const UserProfile = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phone, setPhoneNumber] = useState("");
  const [card, setCardNumber] = useState("");
  const [expiration, setExpirationDate] = useState("");
  const [cvv, setCVVNumber] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfilePic style={styles.profilepic} />
        <Text style={styles.profileName}>John Doe</Text>
        <View>
          <TouchableOpacity>
            <Text style={styles.button}>Following</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Personal:</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            mask={"(999) 999-9999"}
            value={phone}
            onChangeText={(phone) => setPhoneNumber(setPhoneNumber)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Birthday:</Text>
          <TextInput
            style={styles.input}
            placeholder="mm/dd/yyyy"
            mask={"07/28/2002"}
            value={phone}
            onChangeText={(phone) => setPhoneNumber(setPhoneNumber)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Gender:</Text>
          <TextInput
            style={styles.input}
            placeholder="gender"
            mask={"Select"}
            value={phone}
            onChangeText={(phone) => setPhoneNumber(setPhoneNumber)}
          />
        </View>
        <Text style={styles.header}>Billing: </Text>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Card Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter card number"
            mask={"(999) 999-9999"}
            value={card}
            onChangeText={(card) => setCardNumber(setCardNumber)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>Expiration Date:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter experation date"
            mask={"(999) 999-9999"}
            value={expiration}
            onChangeText={(expiration) => setExpirationDate(setExpirationDate)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.label}>CVV Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter cvv number"
            mask={"123"}
            value={cvv}
            onChangeText={(cvv) => setCVVNumber(setCVVNumber)}
            keyboardType="number-pad"
          />
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    fontFamily: "Cochin",
  },
  profilepic: {
    alignItems: "center",
    margin: 20,
  },
  input: {
    height: 50,
    fontSize: 18,
    fontFamily: "Cochin",
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "lightgray",
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    marginLeft: 10,
    fontFamily: "Cochin",
  },
  item: {
    width: "100%",
    padding: 10,
    borderBottomColor: "gray",
    fontFamily: "Cochin",
  },
  placeholderStyles: {
    color: "grey",
  },
  header: {
    fontSize: 20,
    margin: 10,
    fontFamily: "Cochin",
    fontWeight: "bold",
  },
  button: {
    marginTop: 25,
    marginBottom: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: "lightblue",
    backgroundColor: "lightblue",
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Cochin",
  },
});

export default UserProfile;
