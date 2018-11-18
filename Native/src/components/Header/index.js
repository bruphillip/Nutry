import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.Text}</Text>
    </View>
  );
};

export default Header;
