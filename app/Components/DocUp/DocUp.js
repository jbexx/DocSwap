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

import React, { Component } from "react";
import { AppRegistry, Text, View, TextInput, StyleSheet } from "react-native";

export default class OtherComp extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ""
    };
  }

  onChangeText(value) {
    console.log("what");
    //   this.setState({
    //     textValue: value
    //   });
  }

  onSubmit(value) {
    this.setState({
      textValue: value
    });
  }

  render() {
    console.log("say hello");
    return (
      <View>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue.textValue}
          onChangeText={value => this.onChangeText(value)}
          onSubmitEditing={value => this.onSubmit(value)}
          style={styles.input}
        />
        <Text>{this.state.textValue} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 25,
    height: 35,
    marginTop: 40
  }
});

AppRegistry.registerComponent("OtherComp", () => OtherComp);
