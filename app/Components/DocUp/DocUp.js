import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  CameraRoll,
  StyleSheet
} from "react-native";

import PhotoList from "../PhotoList/PhotoList";

export default class DocUp extends Component {
  constructor() {
    super();
    this.state = {
      photoArray: null
    };
  }
  static navigationOptions = {
    title: "Document Upload",
    header: null
  };

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    CameraRoll.getPhotos({ first: 100 }).then(res => {
      photoArray = res.edges;
      this.setState({
        photoArray
      });
    });
  }

  render() {
    console.log(this.state.photoArray)
    if (!this.state.photoArray) {
      return (
              <View style={styles.container}>
                <ActivityIndicator
                style={styles.wheel}
                animating={this.state.animating}
                size="large"
                color='#448ccb'
                />
              </View>
      )
    }

    return (
      <FlatList
        numColumns={3}
        data={ this.state.photoArray }
        renderItem={ ({ item }) => <PhotoList 
                                      image={ item.node.image.uri }
                                      navigate={ this.props.navigation.navigate }
                                      goBack={this.props.navigation.goBack} /> }
        keyExtractor={ item => item.node.timestamp }
      />
    );
  }
  
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

  wheel: {
    height: 80,
  }
});

AppRegistry.registerComponent("DocUp", () => DocUp);
