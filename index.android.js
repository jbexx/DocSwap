import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";

import App from "./app/Components/App/App";
import MediaType from "./app/Components/MediaType/MediaType";
import TakePhoto from "./app/Components/Camera/Camera";
import DocUp from "./app/Components/DocUp/DocUp";
import Verify from "./app/Components/Verify/Verify";
import PhotoList from "./app/Components/PhotoList/PhotoList";
import ImageResult from './app/Components/ImageResult/ImageResult';
import LangResult from './app/Components/LangResult/LangResult';

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
  Capture: { screen: MediaType },
  TakePhoto: { screen: TakePhoto },
  Upload: { screen: DocUp },
  Verify: { screen: Verify },
  ImageResult: { screen: ImageResult },
  LangResult: { screen: LangResult,
    navigationOptions: {
      title: "Language Result",
      header: null
    }
  }
});

AppRegistry.registerComponent("DocSwap", () => DocApp);
