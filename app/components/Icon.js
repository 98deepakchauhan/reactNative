import {View, Text, StyleSheet} from "react-native";
import React from "react";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Icon({
  name,
  size = 50,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <MCIcon name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {},
});
