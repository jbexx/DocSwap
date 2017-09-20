import React from "react";
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import { NavigationActions } from 'react-navigation';

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
      <Text>{ props.navigation.state.params.translation }</Text>

      <View style={styles.bottomBar}> 

        <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={ () => goBack() }>
          <Text style={ styles.btnTxt }>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.cameraBtn, styles.Btn] } onPress={ () => dispatch(backToCamera) }>
          <Text style={ styles.btnTxt }>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.homeBtn, styles.Btn] } onPress={ () => dispatch(backToHome) }>
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
    marginTop: 15,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
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
    justifyContent: 'center',
    height: 80
  },

  goBackBtn: {
    marginLeft: 15
  },

  homeBtn: {
    marginRight: 15
  },
});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;