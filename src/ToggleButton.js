import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Animated } from "react-native";

class ToggleButton extends Component {
  state = {
    toggle: true,
    animated: new Animated.Value(0)
  };

  _onPress() {
    this.animateButton();
    const newState = !this.state.toggle;
    this.setState({ toggle: newState });
    this.props.onStateChange && this.props.onStateChange(newState);
  }

  animateButton() {
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 1000
    }).start;
  }

  render() {
    const { toggle, animated } = this.state;
    const textValue = toggle ? "ON" : "OFF";
    const buttonBg = toggle ? "dodgerblue" : "white";
    const textColor = toggle ? "white" : "black";
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
              backgroundColor: buttonBg,
              justifyContent: "center",
              borderColor: "dodgerblue",
              borderWidth: 2
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                backgroundColor: "red",
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
            >
              <Text
                style={{
                  color: textColor,
                  textAlign: "center",
                  fontSize: 16
                }}
              >
                {textValue}
              </Text>
            </Animated.View>
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
