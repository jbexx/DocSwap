import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  PanResponder,
  Animated,
  StyleSheet,
  Dimensions
} from "react-native";
import { Icon } from 'react-native-elements'
import Camera from "react-native-camera";

export default class TakePhoto extends Component {
  constructor() {
    super();
    this.state = {
      // photo: null,
      pan: new Animated.ValueXY(),
    };
  }
  static navigationOptions = {
    title: "Camera",
    header: null
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({ x: this.state.pan.x._value, y: this.state.pan.y._value })
        this.state.pan.setValue({x: 0, y: 0})
      },

      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
      }
    });
  }

  takePicture() {
    this.camera
      .capture()
      .then(data => { 
        this.props.navigation.navigate('Verify', Object.assign({}, { homeKey: this.props.navigation.state.key }, data))
      })
      .catch(err => console.error(err));
    }

  render() {

    const { Aspect, CaptureTarget, Orientation } = Camera.constants;
    const { pan } = this.state;
    let [translateX, translateY] = [pan.x, pan.y]
    let boxStyle = { transform: [{translateX}, {translateY}] }

    return (
      <View>

        {/* wrap camera in a <View> that is a box with a width and height on it and then the camera will only be the size of that box?  then make it so the box's width and height can be changed by the user when dragging a corner. */}
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={ styles.cam }
          aspect={ Aspect.fill }
          captureTarget={ CaptureTarget.disk }
          Orientation={ Orientation.auto }
          onFocusChanged={ (e) => {} }
          onZoomChanged={ (e) => {} }>

          <Animated.View style={styles.boxStyle} {...this._panResponder.panHandlers}>
            <View style={styles.boudingBox} />
          </Animated.View>

              <View style={ styles.bottomBar }> 

                <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={() => this.props.navigation.goBack()}>
                  <Image source={require("../../../assets/home2.png")}
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

  boundingBox: {
    borderColor: 'green',
    borderWidth: 1,
    height: 200,
    width: 50
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
