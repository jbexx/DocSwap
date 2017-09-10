import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";

export default class Camera extends Component {
  static navigationOptions = {
    title: "Camera",
    header: null
  };
  render() {
    return <Text>Camera</Text>;
  }
}

AppRegistry.registerComponent("Camera", () => Camera);
