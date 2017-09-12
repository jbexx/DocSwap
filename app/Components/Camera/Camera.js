import React, { Component } from "react";
import {
  AppRegistry,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Camera from "react-native-camera";

export default class TakePhoto extends Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }
  static navigationOptions = {
    title: "Camera",
    header: null
  };

  takePicture() {
    //if I want to grab metadata later
    const options = {};
    //options.location = ...
    this.camera
      .capture({ metadata: options })
      .then(data => {
        this.props.navigation.navigate("Verify", data.path);
      })
      .catch(err => console.error(err));
  }

  render() {
    const { Aspect, CaptureTarget } = Camera.constants;

    return (
      <View>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.cam}
          aspect={Aspect.fill}
          captureTarget={CaptureTarget.disk}
        >
          <TouchableOpacity onPress={this.takePicture.bind(this)}>
            <View style={styles.camBtn} />
          </TouchableOpacity>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cam: {
    justifyContent: "flex-end",
    alignItems: "center",
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
