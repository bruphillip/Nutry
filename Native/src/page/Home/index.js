import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import BtnHome from "../../components/Buttons/Home";

class Home extends Component {
  static navigationOptions = {
    title: "Metas",
    tabBarIcon: ({ tintColor }) => <BtnHome color={tintColor} />
  };

  render() {
    return (
      <View>
        <Header Text={"CONSUMIDOS HOJE"} />
      </View>
    );
  }
}

export default Home;
