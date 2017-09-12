import React, { Component } from "react";
import { AppRegistry, Image, TouchableOpacity, StyleSheet } from "react-native";

import PhotoList from "../PhotoList/PhotoList";

export default class Photos extends Component {
  static navigationOptions = {
    title: "Photos"
  };

  render() {
    console.log(this.props);
    return (
      <TouchableOpacity>
        <Image source={require(this.props.image)} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("Photos", () => Photos);
