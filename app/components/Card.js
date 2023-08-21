import {View, Text, Image, StyleSheet} from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Card({title, subTitle, image}) {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.img} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    overflow: "hidden",
    borderRadius: 10,
    // maxHeight: 275,
    backgroundColor: "white",
  },

  img: {
    height: 200,
    width: "100%",
  },

  textContainer: {
    padding: 10,
    paddingHorizontal: 15,
  },

  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 18,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
  },
});
