import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Messagescreen = () => {
  return (
    <View>
      <Text>Message screen</Text>
    </View>
  );
};

export default Messagescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
