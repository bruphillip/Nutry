import MainPage from "./page/Home";
import Statistics from "./page/Statistics";
import Achievements from "./page/Achievements";

import { createBottomTabNavigator } from "react-navigation";

export default createBottomTabNavigator(
  {
    Statistics: Statistics,
    Home: MainPage,
    Achievements: Achievements
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#3498db",
        alignItems: "center",
        justifyContent: "center"
      },
      inactiveTintColor: "#bdc3c7",
      activeTintColor: "#FFF",
      labelStyle: {
        fontSize: 18,
        alignSelf: "center",
        justifyContent: "center",
        borderColor: "#2980b9",
        marginBottom: 15,
        lineHeight: 20
      },
      pressColor: "#2980b9"
    }
  }
);
