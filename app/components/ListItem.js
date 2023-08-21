import {View, Text, Image, StyleSheet, TouchableHighlight} from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem({image, title, subTitle, style, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.mediumGrey} onPress={onPress} r>
      <View style={[styles.container, style]}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  textContainer: {
    paddingLeft: 10,
  },
  title: {
    color: colors.black,
  },
});
