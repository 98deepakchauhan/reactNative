import {View, StyleSheet, TextInput, Platform} from "react-native";
import React from "react";
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

export default function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MCIcon name={icon} size={20} color={colors.lightGrey} />}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.mediumGrey,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "100%",
    marginVertical: 10,
  },

  textInput: {
    width: "100%",
    marginLeft: 10,
  },
});
