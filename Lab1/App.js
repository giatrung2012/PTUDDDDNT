import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "#f5f5",
      maxwidth: "100%",
      minHeight: "35%",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },

    resultText: {
      maxHeight: 45,
      color: "#00b9d6",
      margin: 15,
      fontSize: 35,
    },

    historyText: {
      color: darkMode ? "#8587BB" : "#7c7c7c",
      fontSize: 28,
      marginRight: 10,
      alignSelf: "flex-end",
    },

    themeButton: {
      alignSelf: "flex-start",
      bottom: "5%",
      margin: 15,
      backgroundColor: darkMode ? "#7b8884" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons: {
      width: "100%",
      height: "35%",
      flexDirection: "row",
      flexwrap: "wrap",
    },
    button: {
      borderColor: darkMode ? "#3f4d5b" : "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "24%",
      minHeight: "54%",
      flex: 2,
    },
    textButton: {
      color: darkMode ? "#b5b7bb" : "#7c7c7c",
      fontSize: 28,
    },
  });

  const buttons = [
    "C",
    "DEL",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];

  function calculator() {
    let lastArr = currentNumber[currentNumber.length - 1];
    if (
      lastArr === "/" ||
      lastArr === "*" ||
      lastArr === "-" ||
      lastArr === "+"
    ) {
      setCurrentNumber(currentNumber);
      return;
    }
    let result = eval(currentNumber).toString();
    setCurrentNumber(result);
    return;
  }

  function handleInput(buttonPressed) {
    if (
      buttonPressed === "+" ||
      buttonPressed === "-" ||
      buttonPressed === "*" ||
      buttonPressed === "/"
    ) {
      Vibration.vibrate(35);
      setCurrentNumber(currentNumber + buttonPressed);
      return;
    }
    if (
      buttonPressed === "DEL" ||
      buttonPressed === "C" ||
      buttonPressed === "="
    ) {
      Vibration.vibrate(35);
    }
    switch (buttonPressed) {
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case "C":
        Vibration.vibrate(35);
        setLastNumber("");
        setCurrentNumber("");
        return;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  }

  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo
            name={darkMode ? "light-up" : "moon"}
            size={24}
            color={darkMode ? "white" : "black"}
            onPress={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
          />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              button === "=" ||
              button === "/" ||
              button === "*" ||
              button === "-" ||
              button === "+"
                ? { backgroundColor: "#00b9d6" }
                : button === "." || button === "DEL"
                ? {
                    backgroundColor:
                      button === darkMode
                        ? "#383946"
                        : darkMode === true
                        ? "#414853"
                        : "#fff",
                    minWidth: "37%",
                  }
                : button === "C"
                ? {
                    backgroundColor:
                      typeof button === "number"
                        ? darkMode
                          ? "#303946"
                          : "#fff"
                        : darkMode === true
                        ? "#414853"
                        : "#ededed",
                    minWidth: "36%",
                  }
                : {
                    backgroundColor:
                      typeof button === "number"
                        ? darkMode
                          ? "#303946"
                          : "#fff"
                        : darkMode === true
                        ? "#414853"
                        : "#ededed",
                  },
            ]}
            onPress={() => handleInput(button)}
          >
            <Text
              style={[
                styles.textButton,
                button === "=" ||
                button === "/" ||
                button === "*" ||
                button === "-" ||
                button === "+"
                  ? { color: "white", fontSize: 28 }
                  : {},
              ]}
            >
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
