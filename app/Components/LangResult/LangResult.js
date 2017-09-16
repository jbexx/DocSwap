import React from "react";
import { AppRegistry, StyleSheet, Text, Dimensions } from "react-native";

const LangResult = (props) => {

  return (
    <Text>{props.navigation.state.params.data.translations[0].translatedText}</Text>
  );
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;