import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";

const CapturingTaps = () => {
  return (
    <View style={MyStyle.container}>
      <Button title="Button 1" onPress={() => alert("Hello!")} />
      <TouchableOpacity
        onPress={() => alert("Hello 2!")}
        style={MyStyle.button}
      >
        <Text style={MyStyle.text}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const MyStyle = {
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontSize: 10,
  },
};

export default CapturingTaps;
