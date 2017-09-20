import React, { Component } from "react";
import {
  AppRegistry,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Picker,
  Keyboard,
  StyleSheet,
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
      selectedLanguage: 'af',
      text: ''
    }
  }

  static navigationOptions = {
    title: "Image Result",
    header: null
  };

  componentDidMount() {
    this.setState({
      text: this.props.navigation.state.params
    })
  }

  togglePicker() {
    this.setState({
      picker: !this.state.picker
    })
  }

  cleanText(res) {
    this.props.navigation.navigate('LangResult', res.data.translations[0].translatedText)
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
    .then(res => this.cleanText(res))
    .catch(err => console.log(err))
  }


  render() {
    console.log('state in ir ', this.state)
    const { goBack } = this.props.navigation;

    const mappedLanguages = languages.map(lang => <Picker.Item key={ lang.code }
                                                               label={ lang.language }
                                                               value={ lang.code }
                                                               style={ styles.pickerItem } />)

    return (
      <View style={ styles.container }>

        <TextInput style={ styles.resTxt }
                   onChangeText={ text => this.setState({ text }) }
                   blurOnSubmit={ true }
                   multiline={ true }
                   value={ this.state.text } />

        { this.state.picker ?
        <View style={ styles.pickerContainer }>
            <Picker 
                    selectedValue={ this.state.selectedLanguage }
                    onValueChange={ itemValue => this.setState({ selectedLanguage: itemValue })}
                    prompt='Choose a Language'
                    style={ styles.picker }
                    itemStyle={ styles.langStyle }>
                    { mappedLanguages }
            </Picker>
            <TouchableOpacity style={ styles.translateBtn } onPress={ () => this.translateText() }>
              <Text style={ styles.translateTxt }>Go</Text>
            </TouchableOpacity>
        </View>
            : null
        }

        <View style={styles.bottomBar}> 

          <TouchableOpacity style={ [styles.goBackBtn, styles.Btn] } onPress={ () => goBack() }>
            <Text style={ styles.btnTxt }>Go Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ [styles.submitBtn, styles.Btn] } onPress={ this.togglePicker.bind(this) }>
            <Text style={ styles.btnTxt }>Translate Text</Text>
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
    fontSize: 20,
    height: Dimensions.get("window").height - 80,
    width: Dimensions.get("window").width,
    padding: 10
  },

  pickerContainer: {
    position: 'absolute'
  },
  
  picker: {
    backgroundColor: '#e9e9ef',
    marginTop: Dimensions.get('window').height / 3,
    width: Dimensions.get("window").width
  },

  pickerItem: {
  },

  translateBtn: {
    alignItems: 'center',
    marginTop: 30
  },

  translateTxt: {
    borderWidth: 2,
    borderColor: '#6dcff6',
    fontSize: 30,
    padding: 25
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
    color: 'white',
  },

  submitBtn: {
    marginRight: 15
  },
});

AppRegistry.registerComponent("ImageResult", () => ImageResult);
