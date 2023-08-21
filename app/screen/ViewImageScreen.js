import {View, Text, ImageBackground, StyleSheet} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.bgImage}
        source={require("../assets/chair.jpg")}>
        <View style={styles.btnSection}>
          <View style={styles.closeBtn}>
            <Icon name="window-close" color={"white"} size={35} />
          </View>
          <View style={styles.deleteBtn}>
            <Icon name="trash-can-outline" color={"white"} size={35} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  bgImage: {
    flex: 1,
    // resizeMode: "contain",
    width: "100%",
    height: "100%",
  },

  btnSection: {
    flexDirection: "row",
    marginTop: "5%",
    marginHorizontal: "5%",
    justifyContent: "space-between",
  },
  closeBtn: {},
  deleteBtn: {},
});
