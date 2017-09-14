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

import Camera from "react-native-camera";
import Key from '../../../assets/key/key';

const RNFS = require('react-native-fs');

export default class TakePhoto extends Component {
  static navigationOptions = {
    title: "Verify",
    header: null
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  usePhoto(imgPath) {

    fetch(`https://vision.googleapis.com/v1/images:annotate?key=${Key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
              "requests": [
                {
              "image": {
                "content": imgPath
              },
              "features": [
              {
                "type": "DOCUMENT_TEXT_DETECTION"
              }
            ]
          }
        ]
      })
    })
    .then(data => this.props.navigation.navigate('ImageResult', data))
    .catch(err => console.log('error ', err))

  }

  convertImg() {
    console.log('propsoso', this.props)
    const imgPath = this.props.navigation.state.params
    RNFS.readFile(imgPath, 'base64')
      .then(imgString => this.usePhoto(imgString))
      .catch(err => console.log(err))
  }

  render() {
    const { state, navigate, goBack } = this.props.navigation;

    return (
      <View>
        <ImageBackground
          style={styles.img}
          source={{
            uri: state.params
          }}
        >
          <View style={styles.topBar} />
          <View style={styles.bottomBar}>        
            <TouchableHighlight style={[styles.goBackBtn, styles.Btn]} onPress={() => goBack()}>
              <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.submitBtn, styles.Btn]} onPress={this.convertImg.bind(this)}>
              <Text style={styles.btnTxt}>Use Photo</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },

  topBar: {
    backgroundColor: "rgba(0,0,0,1)",
    height: 20,
    width: "100%"
  },

  bottomBar: {
    backgroundColor: "rgba(0,0,0,0.7)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%'    
  },
  
  Btn: {
    flexDirection: 'column',
    justifyContent: 'center', 
    height: 80
  },

  goBackBtn: {
    marginLeft: 15
  },

  btnTxt: {
    color: 'white'
  },

  submitBtn: {
    marginRight: 15
  },
});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
