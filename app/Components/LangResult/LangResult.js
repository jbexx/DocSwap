import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const LangResult = (props) => {
  console.log('props in LR', props)

  return (
    <View style={ styles.resultContainer }>
      <Text>{ props.navigation.state.params.data.translations[0].translatedText }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: "center"
  }
});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;