import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icons from "react-native-vector-icons/FontAwesome";

const achievements = props => {
  return (
    <View style={styles.container}>
      <Icons name="bullseye" size={30} style={{ color: props.color }} />
      <Text style={{ color: props.color }}>Metas</Text>
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

export default achievements;
