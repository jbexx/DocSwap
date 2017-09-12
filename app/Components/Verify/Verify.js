import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  ImageBackground,
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
    const { state, navigate } = this.props.navigation;

    return (
      <View>
        <ImageBackground
          style={styles.img}
          source={{
            uri: state.params
          }}
        >
          <View style={styles.topBar} />
          <TouchableOpacity onPress={() => navigate("MediaType")}>
            <View style={styles.camBtn} />
          </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tobBar: {
    color: "rgba(0,0,0,0.7)",
    height: 60,
    width: "100%"
  },

  button: {
    height: 50,
    width: 50,
    backgroundColor: "pink"
  },

  img: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },

  camBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#d6d7da"
  }
});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
