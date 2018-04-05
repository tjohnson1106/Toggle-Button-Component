import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ToggleButton from "./src/ToggleButton";

export default class App extends React.Component {
  state = {
    value: ""
  };

  constructor(props) {
    super(props);
    this._onStateChange = this._onStateChange.bind(this);
  }

  _onStateChange(newState) {
    const value = newState ? "ON" : "OFF";
    this.setState({ toggleText: value });
  }

  render() {
    const { toggleText } = this.state;
    return (
      <View style={styles.container}>
        <ToggleButton onStateChange={this._onStateChange} />
        <Text style={{ paddingBottom: 60 }}>State: {toggleText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
