import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

import App from "./app/Components/App/App";

export default class DocSwap extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent("DocSwap", () => DocSwap);
