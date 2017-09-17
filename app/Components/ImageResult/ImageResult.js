import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Picker,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { NavigationActions } from "react-navigation";

import key from '../../../assets/key/key';
import languages from '../../../assets/languages/languages';

export default class ImageResult extends Component {
  constructor() {
    super()
    this.state = {
      picker: false,
      selectedLanguage: 'zh-CN',
      text: ''
    }
  }
  static navigationOptions = {
    title: "Image Results",
    header: null
  };

  componentDidMount() {
    this.setState({
      text: JSON.parse(this.props.navigation.state.params._bodyText)
    })
  }

  togglePicker() {
    this.setState({
      picker: !this.state.picker
    })
  }

  translateText() {
    fetch(`https://translation.googleapis.com/language/translate/v2?key=${key}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: this.state.text,
        target: this.state.selectedLanguage
      })
    })
    .then(data => data.json())
    .then(res => this.props.navigation.navigate('LangResult', res))
    .catch(err => console.log(err))
  }

  render() {

    const parsedData = JSON.parse(this.props.navigation.state.params._bodyText);
    const { goBack } = this.props.navigation;

    const mappedLanguages = languages.map(lang => <Picker.Item key={lang.code} label={lang.language} value={lang.code} />)

    return (
      <View style={styles.container}>

        <Text style={styles.resTxt}>{parsedData.responses[0].fullTextAnnotation.text}</Text>

        { this.state.picker ?
        <View>
            <Picker 
                    selectedValue={this.state.selectedLanguage}
                    onValueChange={ itemValue => this.setState({selectedLanguage: itemValue})}
                    prompt='Choose a Language'
                    style={styles.picker}
                    itemStyle={{color: 'black'}}>
                    {mappedLanguages}
            </Picker>
            <TouchableOpacity onPress={() => this.translateText()}>
              <Text>Translate</Text>
            </TouchableOpacity>
        </View>
            : null
        }

        <View style={styles.bottomBar}> 

          <TouchableOpacity style={[styles.goBackBtn, styles.Btn]} onPress={() => goBack()}>
            <Text style={styles.btnTxt}>Go Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.submitBtn, styles.Btn]} onPress={this.togglePicker.bind(this)}>
            <Text style={styles.btnTxt}>Translate Text</Text>
          </TouchableOpacity>

        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width
  },

  resTxt: {
    // alignSelf: 'center'
  },

  picker: {
    // alignItems: 'center'
  },

  bottomBar: {
    alignSelf: 'flex-end',
    backgroundColor: "#000",
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: '100%'    
  },

  Btn: {
    flexDirection: 'column',
    justifyContent: 'center', 
    height: 80
  },

  goBackBtn: {
    marginLeft: 15
  },

  btnTxt: {
    color: 'white'
  },

  submitBtn: {
    marginRight: 15
  },
});

AppRegistry.registerComponent("ImageResult", () => ImageResult);
