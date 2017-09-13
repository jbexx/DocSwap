import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { NavigationActions } from "react-navigation";

import Camera from "react-native-camera";

export default class TakePhoto extends Component {
  static navigationOptions = {
    title: "Verify",
    header: null
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  usePhoto() {
    console.log('using photo', this.props.navigation.state)
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
            <TouchableOpacity style={[styles.goBackBtn, styles.Btn]} onPress={() => goBack()}>
              <Text style={styles.btnTxt}>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.submitBtn, styles.Btn]} onPress={this.usePhoto.bind(this)}>
              <Text style={styles.btnTxt}>Use Photo</Text>
            </TouchableOpacity>
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
