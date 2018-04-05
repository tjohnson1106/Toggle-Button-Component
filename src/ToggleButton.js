import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

class ToggleButton extends Component {
  state = {
    toggle: false
  };

  _onPress() {
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
  }

  render() {
    const { toggle } = this.state;
    const textValue = toggle ? "ON" : "OFF";
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            onPress={() => this._onPress()}
            style={{
              margin: 10,
              height: 60,
              flex: 1,
              backgroundColor: "dodgerblue",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16
              }}
            >
              {textValue}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "whitesmoke"
  }
});

export default ToggleButton;
