import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class MediaType extends Component {
  handlePress() {
    console.log("here");
  }

  render() {
    return (
      <ImageBackground
        source={require("../../../assets/blue-background.png")}
        style={styles.background}
      >
        <TouchableOpacity onPress={this.handlePress}>
          <Image
            source={require("../../../assets/photo-camera.png")}
            style={[styles.cam, styles.img]}
          />
          <Text style={[styles.camText, styles.text]}>Take Picture</Text>
        </TouchableOpacity>
        <Image source={require("../../../assets/bar.png")} style={styles.bar} />
        <TouchableOpacity>
          <Image
            source={require("../../../assets/upload.png")}
            style={[styles.doc, styles.img]}
          />
          <Text style={[styles.docText, styles.text]}>Upload Image</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "space-around",
    alignItems: "center",
    height: 667,
    width: 375
  },

  bar: {
    width: "80%"
  },

  text: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    fontSize: 35
  }
});

AppRegistry.registerComponent("MediaType", () => MediaType);
