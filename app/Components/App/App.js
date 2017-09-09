import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

import Welcome from "../Welcome/Welcome";
import MediaType from "../MediaType/MediaType";
import DocUp from "../DocUp/DocUp";
import Camera from "../Camera/Camera";

export default class App extends Component {
  render() {
    return (
      <View>
        <MediaType />
      </View>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
