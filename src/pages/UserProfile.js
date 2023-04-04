import React, {useState} from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import ProfilePic from "../component/ProfilePic";
import Header from "../component/Header";


const UserProfile = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const [phone, setPhoneNumber] = useState('');
  const [card, setCardNumber] = useState('');
  const [expiration, setExpirationDate] = useState('');
  const [cvv, setCVVNumber] = useState('');

  
  return (
    <View style={styles.container}>
      <Header text="Profile" />
      <ProfilePic style={styles.profilepic}/>
      <Text style={styles.profileName}>John Doe</Text>
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
          mask={'(999) 999-9999'}
          value={phone}
          onChangeText={(phone) => setPhoneNumber(setPhoneNumber)}
          keyboardType='number-pad'
        />
      </View>
      <Text style={styles.header}>Billing: </Text>
      <View style={styles.emailContainer}>
        <Text style={styles.label}>Card Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          mask={'(999) 999-9999'}
          value={card}
          onChangeText={(card) => setCardNumber(setCardNumber)}
          keyboardType='number-pad'
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.label}>Expiration Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter experation date"
          mask={'(999) 999-9999'}
          value={expiration}
          onChangeText={(expiration) => setExpirationDate(setExpirationDate)}
          keyboardType='number-pad'
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.label}>CVV Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter cvv number"
          mask={'123'}
          value={cvv}
          onChangeText={(cvv) => setCVVNumber(setCVVNumber)}
          keyboardType='number-pad'
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 20,
  },
  profilepic: {
    alignItems: 'center',
    margin: 20,
  },
  input: {
    height: 50,
    fontSize: 18,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'lightgray',
  },
  label: {
    fontSize: 18,
    marginRight: 10,
    marginLeft: 10,
  },
  item: {
    width: '100%',
    padding: 10,
    borderBottomColor: 'gray',
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  placeholderStyles: {
    color: "grey",
  },
  header: {
    alignSelf: "left",
    fontSize: 20,
    margin: 10,
  },
});

export default UserProfile;