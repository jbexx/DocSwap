import React, { Component } from "react";
import { StyleSheet, Image, Dimensions } from "react-native";

export default class App extends Component {
  static navigationOptions = {
    title: "App",
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Capture");
    }, 2000);
  }

  render() {
    return <Welcome />;
  }
}

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  }
});

const Welcome = () => {

  return (
    <Image
      source={ require("../../../assets/WelcomePage.png") }
      style={ styles.background }
    />
  );
};
