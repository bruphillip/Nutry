import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import BtnAchievements from "../../components/Buttons/achievements";

class Achievements extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <BtnAchievements color={tintColor} />
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
