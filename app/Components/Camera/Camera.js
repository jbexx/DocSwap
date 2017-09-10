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
  static navigationOptions = {
    title: "Camera",
    header: null
  };

  handlePhoto(photo) {
    console.log("phoooootoo ", photo);
    //verify photo page
    this.props.navigation.navigate("Verify", photo);
    //pass in photo as prop to display on page
  }

  takePicture() {
    const options = {};
    this.camera
      .capture({ metadata: options })
      .then(data => this.handlePhoto(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.cam}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <TouchableOpacity
            style={styles.highlight}
            onPress={this.takePicture.bind(this)}
          >
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
