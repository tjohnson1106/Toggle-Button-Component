import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Animated, Easing } from "react-native";

class ToggleButton extends Component {
  state = {
    toggle: true,
    animated: new Animated.Value(1)
  };

  _onPress() {
    const newState = !this.state.toggle;
    this.animateButton(newState);
    this.setState({ toggle: newState });
    this.props.onStateChange && this.props.onStateChange(newState);
  }

  animateButton(newState) {
    this.state.animated.setValue(newState ? 0 : 1);
    Animated.timing(this.state.animated, {
      toValue: newState ? 1 : 0,
      duration: 1000
    }).start();
  }

  render() {
    const { toggle, animated } = this.state;
    const textValue = toggle ? "ON" : "OFF";
    const textColor = toggle ? "white" : "black";
    const buttonBg = toggle ? "dodgerblue" : "white";
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => this._onPress()}
          style={{
            flex: 1,
            margin: 10,
            height: 60,
            backgroundColor: buttonBg,
            justifyContent: "center",
            borderRadius: 30,
            borderColor: "dodgerblue",
            borderWidth: 2
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              flex: 1,
              backgroundColor: "dodgerblue",
              borderRadius: 30,
              justifyContent: "center",
              transform: [
                {
                  scale: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1]
                  })
                }
              ]
            }}
          />
          <Text
            style={{
              color: textColor,
              textAlign: "center",
              fontSize: 16
            }}
          >
            {textValue}
          </Text>
        </TouchableOpacity>
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
