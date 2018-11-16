import React, { Component } from "react";
import { View, Text } from "react-native";

import Header from "../../components/Header";

class Statistics extends Component {
  static navigationOptions = {
    title: "Estatisticas"
  };

  render() {
    return (
      <View>
        <Header Text={"ESTATISTICAS"} />
        <Text>Statistics</Text>
      </View>
    );
  }
}

export default Statistics;
