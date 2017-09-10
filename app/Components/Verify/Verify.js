import React, { Component } from "react";
import { AppRegistry, View, Image, StyleSheet, Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";

import Camera from "react-native-camera";

// const navigateAction = NavigationActions.navigate({

//   routeName: 'Verify',

//   params: {},

//   action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
// })

// this.props.navigation.dispatch(navigateAction)

export default class TakePhoto extends Component {
  static navigationOptions = {
    title: "Verify",
    header: null
  };

  render() {
    console.log("props in verify ", this.props.navigation);
    return (
      <View>
        <Image source={require(this.props.navigation.state.params.path)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("TakePhoto", () => TakePhoto);
