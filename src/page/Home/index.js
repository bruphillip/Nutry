import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

class Home extends Component {
  render() {
    return (
      <View>
        <Header Text={"CONSUMIDOS HOJE"} />
      </View>
    );
  }
}

export default Home;
