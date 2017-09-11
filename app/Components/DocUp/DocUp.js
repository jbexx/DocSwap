import React, { Component } from "react";
import { AppRegistry, Text, View, CameraRoll, StyleSheet } from "react-native";

export default class DocUp extends Component {
  getPhotos() {
    CameraRoll.getPhotos().then(res => console.log(res));
  }

  render() {
    return (
      <View>
        <Text>{this.state.textValue} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("DocUp", () => DocUp);
