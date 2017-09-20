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
import { Icon } from 'react-native-elements'
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
    this.camera
      .capture()
      .then(data => { 
        this.props.navigation.navigate('Verify', Object.assign({}, { homeKey: this.props.navigation.state.key }, data))
      })
      .catch(err => console.error(err));
    }
    
    // this.props.navigation.navigate("Verify", data.path);
  // to pass through key of camera screen to try an navigate back there from last screen
  // this.props.navigation.navigate("Verify", { data: data.path, ...this.props.navigation.params });

  render() {
    const newObj = Object.assign({}, {...this.props.navigation.state.params} )
    console.log('new obj', newObj)
    const { Aspect, CaptureTarget, Orientation } = Camera.constants;

    return (
      <View>
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={ styles.cam }
          aspect={ Aspect.fill }
          captureTarget={ CaptureTarget.disk }
          Orientation={ Orientation.auto }
          onFocusChanged={ (e) => {} }
          onZoomChanged={ (e) => {} }
        >
          <View style={ styles.bottomBar }> 

            <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={() => this.props.navigation.goBack()}>
              <Image source={require("../../../assets/home.png")}
                  style={ styles.icon } />
              <Text style={ styles.btnTxt }>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.takePicture.bind(this) }>
              <View style={ styles.camBtn } />
            </TouchableOpacity>

            <TouchableOpacity style={ [styles.submitBtn, styles.Btn] } />
            
          </View>
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

  bottomBar: {
    alignSelf: 'flex-end',
    backgroundColor: "rgba(0,0,0,0.7)",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%'    
  },

  camBtn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1.3,
    borderColor: "#d6d7da",
    marginTop: 15
  },

  Btn: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    marginTop: 10
  },

  goBackBtn: {
    marginLeft: 15
  },

  btnTxt: {
    color: 'white'
  },

  submitBtn: {
    marginRight: 15,
    width: 55
  },

  icon: {
    height: 30,
    width: 30
  }
});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
