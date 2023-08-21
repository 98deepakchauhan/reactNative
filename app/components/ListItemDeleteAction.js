import {View, Text, StyleSheet, TouchableWithoutFeedback} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
  },
});

s8n3bdf9s8wbs3iz;