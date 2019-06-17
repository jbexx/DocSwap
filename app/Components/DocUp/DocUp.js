import React, { Component } from "react";
import {
  AppRegistry,
  View,
  FlatList,
  Dimensions,
  CameraRoll,
  StyleSheet
} from "react-native";
import Spinner from 'react-native-spinkit';
import PhotoList from "../PhotoList/PhotoList";

export default class DocUp extends Component {
  constructor() {
    super();
    this.state = {
      photoArray: null
    };
  }
  static navigationOptions = {
    title: "CameraRoll",
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

    const { photoArray } = this.state;
    const { navigate, goBack } = this.props.navigation;

    if (!photoArray) {
      return (
        <View style={ styles.container }>
          <Spinner style={ styles.loader }
                    isVisible={ true }
                    size={ 100 }
                    type={ 'Wave' }
                    color={ '#3DD8CE' } />
        </View>
      )
    }



    return (
      <FlatList
        numColumns={3}
        data={ photoArray }
        renderItem={ ({ item }) => <PhotoList 
                                      image={ item.node.image.uri }
                                      navigate={ navigate }
                                      goBack={ goBack } /> }
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
