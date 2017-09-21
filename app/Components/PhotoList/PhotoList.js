import React, { Component } from "react";
import { 
  AppRegistry,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";

export default class Photos extends Component {
  static navigationOptions = {
    title: "Camera Roll",
  }

  chosenPicture() {
    this.props.navigate('Verify', { path: this.props.image })
  }

  render() {

    return (
        <TouchableOpacity 
          activeOpacity={ 0.7 }
          onPress={ this.chosenPicture.bind(this) }>
          <Image 
            style={ styles.thumbnail }
            source={{ uri: this.props.image }}
            />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  thumbnail: {
    borderWidth: 0.5,
    borderColor: "#fff",
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3
  }
});

AppRegistry.registerComponent("Photos", () => Photos);
