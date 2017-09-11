import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { NavigationActions } from "react-navigation";

import Camera from "react-native-camera";

export default class TakePhoto extends Component {
  static navigationOptions = {
    title: "Verify",
    header: null
  };

  render() {
    console.log("props in verify ", this.props.navigation);
    return (
      <View>
        <Image
          source={{ uri: this.props.navigation.state.params.path }}
          style={{ resizeMode: Image.resizeMode.contain }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("MediaType")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    backgroundColor: "pink"
  }
});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
