// import HelloWorld from "./src/HelloWorld";
// import CapturingTaps from "./src/CapturingTaps";
// import CustomComponent from "./src/CustomComponent";
// import StateProps from "./src/StateProps";
// import Styling from "./src/Styling";
// import ScrollableContent from "./src/ScrollableContent";
// import Form from "./src/Form";
// import LongLists from "./src/LongLists";

import { Calculator, styles } from "./src/Calculator";
import { TouchableOpacity } from "react-native";

const App = () => {
  // return <HelloWorld />;
  // return <CapturingTaps />;
  // return <CustomComponent />;
  // return <StateProps />;
  // return <Styling />;
  // return <ScrollableContent />;
  // return <Form />;
  // return <LongLists />;

  return (
    <Calculator>
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
    </Calculator>
  );
};

export default App;
