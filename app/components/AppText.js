import {Text, Platform, StyleSheet} from "react-native";
import React from "react";
import colors from "../config/colors";

export default function AppText({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.lightGrey,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "roboto" : "avenir",
  },
});
