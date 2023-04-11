import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen, { SocialButton } from "react-native-login-screen";

export default class Login extends React.Component {
  render() {
    return (
      <LoginScreen
        logoImageSource={require("../../assets/logo.png")}
        onLoginPress={() => {
          this.props.navigation.navigate("Orders");
        }}
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
        <SocialButton
          text="Continue with Twitter"
          imageSource={require("../../assets/twitter-logo.png")}
          onPress={() => {}}
        />
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
