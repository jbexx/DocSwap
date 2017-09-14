import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { NavigationActions } from "react-navigation";

export default class ImageResult extends Component {
  static navigationOptions = {
    title: "Image Results"
  };

  render() {
      const parsedData = JSON.parse(this.props.navigation.state.params._bodyText)
    console.log('props in image result', parsedData.responses[0].fullTextAnnotation.text)

    return (
      <View style={styles.container}>
        <Text>{parsedData.responses[0].fullTextAnnotation.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center'
  }
});

AppRegistry.registerComponent("ImageResult", () => ImageResult);
