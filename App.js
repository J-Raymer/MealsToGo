import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { React } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
