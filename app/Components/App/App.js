// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, View } from "react-native";

// export default class DocSwap extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to DockSwap!</Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{"\n"}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });

// AppRegistry.registerComponent("DocSwap", () => DocSwap);

// <View style={[styles.myView, styles.first]}>
// <Text style={styles.myText}> {this.state.name} </Text>
// </View>
// <TouchableHighlight
// style={styles.myView}
// onPress={this.onPress}
// underlayColor="green"
// >
// <View>
//   <Text style={styles.myText}> {this.state.name} </Text>
// </View>
// </TouchableHighlight>
// <TouchableOpacity>
// <View style={styles.myView}>
//   <Text style={styles.myText}> {this.state.name} </Text>
// </View>
// </TouchableOpacity>

import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import Welcome from "../Welcome/Welcome";
import MediaType from "../MediaType/MediaType";
import DocUp from "../DocUp/DocUp";
import Camera from "../Camera/Camera";

export default class Component1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hello World"
    };
  }

  render() {
    console.log("say hello");
    return (
      <View style={styles.container}>
        <Welcome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },

  myText: {
    fontSize: 30
  },

  myView: {
    backgroundColor: "steelblue",
    flex: 1,
    margin: 20
  }
});

AppRegistry.registerComponent("Component1", () => Component1);
