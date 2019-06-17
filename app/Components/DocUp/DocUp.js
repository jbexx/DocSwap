import React, { Component } from "react";
import {
  AppRegistry,
  CameraRoll,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Spinner from 'react-native-spinkit';

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

  async getPhotos() {
    try {
      const res = await CameraRoll.getPhotos({ first: 100 });
    
      this.setState({ photoArray: res.edges })
    }

    catch(err) {
      console.log({ err })
    }
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

  thumbnail: {
    borderWidth: 0.5,
    borderColor: "#fff",
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 3
  },

  wheel: {
    height: 80,
  }
});

AppRegistry.registerComponent("DocUp", () => DocUp);


const PhotoList = (props) => {

  const chosenPicture = () => {
    props.navigate('Verify', { path: props.image })
  }

  return (
      <TouchableOpacity 
        activeOpacity={ 0.7 }
        onPress={ chosenPicture }>
        <Image 
          style={ styles.thumbnail }
          source={{ uri: props.image }}
          />
      </TouchableOpacity>
  );
}