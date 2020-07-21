import React from "react";
import { ImageBackground, Image, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";

const WelcomeScreen = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../images/mail.jpg")}
    >
      <TouchableHighlight
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Log In")}
      >
        <Text style={styles.logInText}>Log In</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.registerBtn}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableHighlight>
      <Image style={styles.logo} source={require("../images/quill.jpg")} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  loginBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "#e9d4b7",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 150,
    position: "absolute",
    top: 50,
    borderRadius: 70,
  },
  registerText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  logInText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
