import React, { Component } from "react";
import { NavigationActions, NavigationState, navigator, NavigationUriActionPayload } from 'react-navigation'
import {
  AppRegistry,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

export default class MediaType extends Component {
  static navigationOptions = {
    title: "Capture",
    header: null
  };
  
  resetNav() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'MediaType'})
      ]
    })
    dispatch = this.props.navigation.dispatch(resetAction)
  }
  
  render() {
    const { navigate, dispatch } = this.props.navigation;

    return (
      <ImageBackground
        source={ require("../../../assets/blue-background.png") }
        style={ styles.background }
      >
        <TouchableOpacity
          style={ styles.button }
          onPress={ () => navigate("TakePhoto") }
          activeOpacity={ 0.5 }
        >
          <Image
            source={ require("../../../assets/photo-camera.png") }
            style={ [styles.cam, styles.img] }
          />
          
          <Image
            style={ styles.picText }
            source={ require("../../../assets/picture-text.png") }
          />
        </TouchableOpacity>

        <Image source={ require("../../../assets/bar.png") } style={ styles.bar } />

        <TouchableOpacity
          style={ styles.button }
          onPress={ () => navigate("Upload") }
          activeOpacity={ 0.5 }
        >
          <Image
            source={ require("../../../assets/upload.png") }
            style={ [styles.doc, styles.img] }
          />
          <Image
            style={ styles.docText }
            source={ require("../../../assets/doc-text.png") }
          />
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
    height: 200
  },

  img: {
    height: 80,
    width: 80
  },

  picText: {
    height: 35,
    width: 157
  },

  bar: {
    height: 1,
    width: "80%"
  },

  docText: {
    height: 40,
    width: 165
  }
});

AppRegistry.registerComponent("MediaType", () => MediaType);
