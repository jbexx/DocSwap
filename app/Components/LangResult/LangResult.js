import React from "react";
import { AppRegistry,
         StyleSheet,
         View,
         Text,
         Image,
         TouchableOpacity,
         Dimensions } from "react-native";
import { NavigationActions } from 'react-navigation';
import Share from 'react-native-share'

const LangResult = (props) => {
  const { cameraKey, homeKey, translation } = props.navigation.state.params;

  const backToCamera = NavigationActions.back({
    key: cameraKey
  })

  const backToHome = NavigationActions.back({
    key: homeKey
  })

  const dispatchBack = screen => () => {
    console.log('screen', screen)
    props.navigation.dispatch(screen)
  }

  const navBack = () => {
    props.navigation.goBack()
  }

  const shareText = () => {
    const shareOptions = {
      title: "Translated Doc",
      message: props.navigation.state.params.translation,
      subject: "Sharing Translated Document"
    };

    Share.open(shareOptions).catch(err => console.log(err))
  }

  return (
    <View style={ styles.resultContainer }>

      <Text style={ styles.resTxt }>{ translation }</Text>

      <View style={ styles.bottomBar }> 

        <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={ navBack }>
          <Image source={ require("../../../assets/left-arrow.png") }
                 style={ styles.icon } />
          <Text style={ styles.btnTxt }>Go Back</Text>
        </TouchableOpacity>

        {
          cameraKey ? <TouchableOpacity style={ [styles.cameraBtn, styles.Btn] } onPress={ dispatchBack(backToCamera) }>
          <Image source={ require("../../../assets/small-camera.png") }
                 style={ styles.smallIcon } />
          <Text style={ styles.btnTxt }>Camera</Text>
          </TouchableOpacity>
          : null
        }

        <TouchableOpacity style={ [styles.cameraBtn, styles.Btn] } onPress={ shareText }>
          <Image source={ require("../../../assets/message.png") }
                 style={ styles.smallIcon } />
          <Text style={ styles.btnTxt }>Share</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.homeBtn, styles.Btn] } onPress={ dispatchBack(backToHome) }>
        <Image source={ require("../../../assets/home2.png") }
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
    height: Dimensions.get("window").height - 95,
    width: Dimensions.get("window").width,
    padding: 10,
    marginTop: 15
  },

  bottomBar: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 95,
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
  },
});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;