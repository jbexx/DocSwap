import React from "react";
import { AppRegistry, StyleSheet, Image, Dimensions } from "react-native";

//splash screen placeholder

const Welcome = () => {

  return (
    <Image
      source={ require("../../../assets/WelcomePage.png") }
      style={ styles.background }
    />
  );
};

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
});

AppRegistry.registerComponent("Welcome", () => Welcome);

export default Welcome;
