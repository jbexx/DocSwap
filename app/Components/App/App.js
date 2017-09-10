import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

import Welcome from "../Welcome/Welcome";
import MediaType from "../MediaType/MediaType";
import DocUp from "../DocUp/DocUp";
import Camera from "../Camera/Camera";

export default class App extends Component {
  static navigationOptions = {
    title: "App",
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("MediaType");
    }, 2000);
  }

  render() {
    console.log("propppps", this.props);
    return <Welcome />;
  }
}

AppRegistry.registerComponent("App", () => App);
