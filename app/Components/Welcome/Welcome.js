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

// import React, { Component } from "react";
// import { AppRegistry, Text, View, ListView, StyleSheet } from "react-native";

// const users = [
//   { name: "Jack M" },
//   { name: "Dan The Man" },
//   { name: "Christie the southern Lynam dancer" },
//   { name: "Tyler stop yelling please" }
// ];

// export default class Users extends Component {
//   constructor() {
//     super();
//     const ds = new ListView.DataSource({
//       rowHasChanged: (r1, r2) => r1 !== r2
//     });
//     this.state = {
//       userDataSource: ds
//     };
//   }

//   conmponentDidMount() {
//     this.fetchUsers();
//   }

//   fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         this.setState({
//           userDataSource: this.state.userDataSource.cloneWithRows(res)
//         });
//       });
//   }

//   renderRow(user, sectionId, rowId, highlightRow) {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.rowText}>{user.name}</Text>
//       </View>
//     );
//   }

//   render() {
//     return (
//       <ListView
//         dataSource={this.state.userDataSource}
//         renderRow={this.renderRow.bind(this)}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     justifyContent: "center",
//     padding: 10,
//     backgroundColor: "#f4f4f4",
//     marginBottom: 3,
//     height: 35
//   },

//   rowText: {
//     flex: 1
//   }
// });

// AppRegistry.registerComponent("Users", () => Users);

import React from "react";
import { AppRegistry, Text, View, StyleSheet, Image } from "react-native";

const Welcome = () => {
  return (
    <Image
      source={require("../../../assets/WelcomePage.png")}
      style={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // resizeMode: "stretch",
    height: 667,
    width: 375
  }
});

AppRegistry.registerComponent("Welcome", () => Welcome);

export default Welcome;
