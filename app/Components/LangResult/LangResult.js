import React from "react";
import { AppRegistry, StyleSheet, View, Text, TextInput, Image, TouchableOpacity, Dimensions } from "react-native";
import { NavigationActions } from 'react-navigation';
// import { Icon } from 'react-native-vector-icons'

const LangResult = (props) => {

  const { goBack, dispatch } = props.navigation;

  const backToCamera = NavigationActions.back({
    key: props.navigation.state.params.cameraKey
  })

  const backToHome = NavigationActions.back({
    key: props.navigation.state.params.homeKey
  })

  return (
    <View style={ styles.resultContainer }>

      <TextInput style={ styles.resTxt }
                   onChangeText={ text => this.setState({ text }) }
                   blurOnSubmit={ true }
                   multiline={ true }
                   editable={ false }
                   value={ props.navigation.state.params.translation } />

      <View style={styles.bottomBar}> 

        <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={ () => goBack() }>
          <Image source={require("../../../assets/left-arrow.png")}
                 style={ styles.icon } />
          <Text style={ styles.btnTxt }>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.cameraBtn, styles.Btn] } onPress={ () => dispatch(backToCamera) }>
          <Image source={require("../../../assets/photo-camera.png")}
                 style={ styles.smallIcon } />
          <Text style={ styles.btnTxt }>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.homeBtn, styles.Btn] } onPress={ () => dispatch(backToHome) }>
          <Image source={require("../../../assets/home.png")}
                 style={ styles.smallIcon } />          
          <Text style={ styles.btnTxt }>Home</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },

  resTxt: {
    fontSize: 20,
    height: Dimensions.get("window").height - 80,
    width: Dimensions.get("window").width,
    padding: 10
  },

  bottomBar: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%'    
  },

  btnTxt: {
    color: '#fff'
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

  cameraBtn: {
    height: 50,
    marginTop: 15,
    marginRight: 15
  },

  homeBtn: {
    height: 50,
    marginTop: 15,
    marginRight: 15
  },

  icon: {
    height: 25,
    width: 25
  },

  smallIcon: {
    height: 30,
    width: 30
  }
});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;