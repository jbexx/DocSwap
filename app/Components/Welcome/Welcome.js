import React from "react";
import { AppRegistry, Text, View, StyleSheet, Image } from "react-native";

const Welcome = () => {
  return (
    <Image
      source={require("../../../assets/WelcomePage.png")}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    height: 667,
    width: 375
  }
});

AppRegistry.registerComponent("Welcome", () => Welcome);

export default Welcome;
