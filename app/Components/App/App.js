import React, { Component } from "react";
import { AppRegistry } from "react-native";

import Welcome from "../Welcome/Welcome";

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

AppRegistry.registerComponent("App", () => App);
