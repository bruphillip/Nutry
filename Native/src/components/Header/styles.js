import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: Dimensions.get("window").width,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#FFF",
    fontWeight: "100",
    fontSize: 18
  }
});

export default styles;
