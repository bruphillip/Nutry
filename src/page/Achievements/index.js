import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

class Achievements extends Component {
  static navigationOptions = {
    title: "Metas"
  };

  render() {
    return (
      <View>
        <Header Text={"METAS"} />
        <Text>Metas</Text>
      </View>
    );
  }
}

export default Achievements;
