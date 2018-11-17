import MainPage from "./page/Home";
import Statistics from "./page/Statistics";
import Achievements from "./page/Achievements";

import { createBottomTabNavigator } from "react-navigation";

export default createBottomTabNavigator(
  {
    Statistics,
    MainPage,
    Achievements
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#3498db",
        alignItems: "center",
        justifyContent: "center"
      },
      inactiveTintColor: "#FFF",
      activeTintColor: "#000",
      showLabel: false
    }
  }
);
