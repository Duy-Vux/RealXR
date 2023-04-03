import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen, { SocialButton } from "react-native-login-screen";

export default class Login extends React.Component {
  logIn = (email, password) => {}; //connect to database and check password and email}
  render() {
    return (
      <LoginScreen
        logoImageSource={require("../../assets/logo.png")}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={(email) => {}}
        onPasswordChange={(password) => {}}
      >
        <SocialButton
          text="Continue with Google"
          imageSource={require("../../assets/google-logo.png")}
          onPress={() => {}}
        />
        <SocialButton text="Continue with Facebook" onPress={() => {}} />
        <SocialButton text="Continue with Twitter" onPress={() => {}} />
      </LoginScreen>
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
