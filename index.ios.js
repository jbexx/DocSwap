import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import App from "./app/Components/App/App";
import MediaType from "./app/Components/MediaType/MediaType";
import Camera from "./app/Components/Camera/Camera";
import DocUp from "./app/Components/DocUp/DocUp";

export default class DocSwap extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <App navigation={navigation} />
      </View>
    );
  }
}

const DocApp = StackNavigator({
  Home: { screen: App },
  MediaType: { screen: MediaType },
  Camera: { screen: Camera },
  Upload: { screen: DocUp }
});

AppRegistry.registerComponent("DocSwap", () => DocApp);
