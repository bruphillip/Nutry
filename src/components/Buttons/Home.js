import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

const home = props => {
  return (
    <View style={styles.container}>
      <Icons name="ios-home" size={30} style={{ color: props.color }} />
      <Text style={{ color: props.color }}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default home;
