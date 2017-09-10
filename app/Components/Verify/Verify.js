import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet, Dimensions } from "react-native";
import Camera from "react-native-camera";

export default class TakePhoto extends Component {
  static navigationOptions = {
    title: "Verify",
    header: null
  };

  render() {
    return (
      <View>
        <Text>You made it</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
