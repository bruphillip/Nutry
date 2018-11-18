import React, { Component } from "react";
import { View, Text } from "react-native";
import BtnStatistic from "../../components/Buttons/statistic";

import Header from "../../components/Header";

class Statistics extends Component {
  static navigationOptions = {
    title: "",
    tabBarIcon: ({ tintColor }) => <BtnStatistic color={tintColor} />
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
