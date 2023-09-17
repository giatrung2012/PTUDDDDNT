import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HelloWorld = () => {
  return (
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
};

const MyStyle = StyleSheet.create({
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    color: "#000",
  },
});

export default HelloWorld;
