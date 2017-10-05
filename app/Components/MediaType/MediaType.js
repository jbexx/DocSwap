import React, { Component } from "react";
import { NavigationActions } from 'react-navigation'
import {
  AppRegistry,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

export default class MediaType extends Component {
  static navigationOptions = {
    title: "Capture",
    header: null,
    gesturesEnabled: false
  };
  
  render() {

    const { navigate, dispatch, state } = this.props.navigation;

    return (
      <ImageBackground
        source={ require("../../../assets/blue-background.png") }
        style={ styles.background }>

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => navigate("TakePhoto") }
          activeOpacity={ 0.5 }>
          <Image
            source={ require("../../../assets/photo-camera.png") }
            style={ [styles.cam, styles.img] }/>
          <Image
            style={ styles.picText }
            source={ require("../../../assets/picture-text.png") }/>
        </TouchableOpacity>

        <Image source={ require("../../../assets/bar.png") } style={ styles.bar } />

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => navigate("Upload") }
          activeOpacity={ 0.5 }>
          <Image
            source={ require("../../../assets/upload.png") }
            style={ [styles.doc, styles.img] }/>
          <Image
            style={ styles.docText }
            source={ require("../../../assets/doc-text.png") }/>
        </TouchableOpacity>

        <Image source={ require("../../../assets/bar.png") } style={ styles.bar } />

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => navigate("ImageResult", { from: "text" }) }
          activeOpacity={ 0.5 }>
          <Image
            source={ require("../../../assets/message-2.png") }
            style={ [styles.doc, styles.img] }/>
          <Image
            style={ styles.msgText }
            source={ require("../../../assets/message-text.png") }/>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    justifyContent: "space-around",
    alignItems: "center",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },

  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: 'rgba(0,0,0,0)',
    height: 150,
    width: 150
  },

  img: {
    height: 60,
    width: 60
  },

  bar: {
    height: 1,
    width: "80%"
  },

  picText: {
    height: 28,
    width: 127
  },

  docText: {
    height: 35,
    width: 145
  },

  msgText: {
    height: 35,
    width: 91
  }
});

AppRegistry.registerComponent("MediaType", () => MediaType);
