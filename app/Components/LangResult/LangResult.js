import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";

const LangResult = (props) => {

  return (
    <View style={ styles.resultContainer }>
      <Text>{ props.navigation.state.params }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    alignItems: "center",
    marginTop: 15
  }
});

AppRegistry.registerComponent("LangResult", () => LangResult);

export default LangResult;